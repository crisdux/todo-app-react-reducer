export const reducer = (state = [], action) => {

    switch (action.type) {
        case 'add_task':
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                isAlertOpen: true,
                contentAlert: 'Tarea añadida'
            }

        case 'close-alert':
            return {
                ...state, isAlertOpen: false
            }

        case 'error_task':
            return {
                ...state,
                isAlertOpen: true,
                contentAlert: 'Ingrese una tarea'
            }

        case 'delete_task':
            const { payload } = action;
            const filterTask = state.tasks.filter((task) => task.id !== payload);
            // console.log(state);
            return {
                ...state,
                tasks: filterTask,
                isAlertOpen: true,
                contentAlert: 'Eliminado!',
            }

        case 'task-success':
            const toggle = state.tasks?.map((todo) =>
                (todo.id === action.payload)
                    ? { ...todo, done: !todo.done }
                    : todo
            );

            return {
                ...state,
                tasks: [...toggle],
            }

        default:
            return state;
    }

}
