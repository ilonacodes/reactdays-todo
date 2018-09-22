export const t = {
    CREATE_TODO: 'CREATE_TODO',
    LOAD_TODOS: 'LOAD_TODOS',
    LOAD_TODOS_SUCCESS: 'LOAD_TODOS_SUCCESS',
    COMPLETE_TODO: 'COMPLETE_TODO',
    UPDATE_TODO: 'UPDATE_TODO',
    DELETE_TODO: 'DELETE_TODO'
};

export const actions = {
    createTodo: (todo) => ({
        type: t.CREATE_TODO,
        todo
    }),

    loadTodos: () => ({
        type: t.LOAD_TODOS
    }),

    loadTodosSuccess: todos => ({
        type: t.LOAD_TODOS_SUCCESS,
        todos
    }),

    completeTodo: todo => ({
        type: t.COMPLETE_TODO,
        todo
    }),

    updateTodo: todo => ({
        type: t.UPDATE_TODO,
        todo
    }),

    deleteTodo: todo => ({
        type: t.DELETE_TODO,
        todo
    })
};