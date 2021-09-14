import React, { useState, useEffect, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {reducer} from '../helpers/reducer';
import Alert from './Alert'
import Form from './Form';
import ListadoTareas from './ListadoTareas';
import TareasPendientes from './TareasPendientes';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const UI = () => {
    const [task, setTask] = useState('');
    const [state, dispatch] = useReducer(reducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state))
    }, [state])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            const newTask = { id: uuidv4(), task, done: false }
            dispatch({ type: 'add_task', payload: newTask });
            limpiarFormulario();
        } else {
            dispatch({ type: 'error_task' });
        }
    }

    const handleCheck = (id) => {
        dispatch({ type: 'task-success', payload: id })
    }

    const limpiarFormulario = () => {
        setTask('');
    }

    const cerrarAlert = () => {
        dispatch({ type: 'close-alert' });
    }

    const deleteTask = (id) => {
        dispatch({ type: 'delete_task', payload: id });
    }

    return (

        <div className="container">
            {state.isAlertOpen && <Alert contentAlert={state.contentAlert} cerrarAlert={cerrarAlert} />}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                {/* formulario  */}
                <Form task={task} setTask={setTask} handleSubmit={handleSubmit} />

                {/* listado de tareas  */}
                <div>
                    <h2 className="subtitle">Tareas ( {state.tasks.length} )</h2>
                    {state.tasks.length === 0 && <TareasPendientes mensaje="No hay tareas pendientes" />}
                    {
                        state.tasks?.map((task) => {
                            return (
                                <ListadoTareas {...task} handleCheck={handleCheck} deleteTask={deleteTask} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default UI
