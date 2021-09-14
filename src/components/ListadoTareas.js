import React from 'react'

const ListadoTareas = ({id, task, done, handleCheck, deleteTask}) => {
    return (
        <section key={id}>
            <ul>
                <div className="grid grid-cols-3 mt-4">
                    <div className="text-left">
                        <li
                            className={`${done && 'line-through'} text-gray-800`}
                        >{task}</li>
                    </div>
                    <div className="text-center">
                        <input
                            type="checkbox" onClick={() => handleCheck(id)}
                            className="cursor-pointer "
                        />
                    </div>
                    <div className="text-left">
                        <button
                            className="button-eliminar"
                            onClick={() => deleteTask(id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </ul>
        </section>
    )
}

export default ListadoTareas
