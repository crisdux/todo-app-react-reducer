import React from 'react'

const Form = ({task, setTask, handleSubmit}) => {

    return (
        <section>
            <form className="mx-10" onSubmit={handleSubmit}>
                <h2 className="subtitle">Formulario</h2>
                <div>
                    <label htmlFor="todo" className="block text-gray-700 text-sm font-bold mb-2">Tareas</label>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        autoComplete="off"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <footer className="my-4 flex justify-center">
                        <button
                            className="button-registrar"
                        >
                            Registrar
                        </button>
                    </footer>
                </div>
            </form>
        </section>
    )
}

export default Form
