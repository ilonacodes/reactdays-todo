export const t = {
    CREATE_TODO: 'CREATE_TODO',
    LOAD_TODOS: 'LOAD_TODOS',
    LOAD_TODOS_SUCCESS: 'LOAD_TODOS_SUCCESS'
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
    })
};