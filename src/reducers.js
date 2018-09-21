import {t} from './actions';

export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case t.LOAD_TODOS_SUCCESS:
            return action.todos;

        default:
            return state;
    }
};