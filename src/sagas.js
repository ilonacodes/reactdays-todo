import axios from 'axios';
import { all, put, takeEvery } from 'redux-saga/effects'
import {actions, t} from './actions';

const baseUrl = 'https://restapinator.herokuapp.com/api/v1';

function* createTodo(action) {
    yield axios.post(`${baseUrl}/todos`, action.todo);
    yield put(actions.loadTodos())
}

function* wacthCreateTodo() {
    yield takeEvery(t.CREATE_TODO, createTodo)
}

function* loadTodos() {
    const response = yield axios.get(`${baseUrl}/todos`);
    yield put(actions.loadTodosSuccess(response.data))
}

function* watchLoadTodos() {
    yield takeEvery(t.LOAD_TODOS, loadTodos)
}

function* completeTodo(action) {
    yield axios.put(`${baseUrl}/todos/${action.todo.id}`, {
        ...action.todo,
        completed: !action.todo.completed
    });
    yield put(actions.loadTodos())
}

function* watchCompleteTodo() {
    yield takeEvery(t.COMPLETE_TODO, completeTodo)
}

function* updateTodo(action) {
    yield axios.put(`${baseUrl}/todos/${action.todo.id}`, action.todo);
    yield put(actions.loadTodos());
}

function* watchUpdateTodo() {
    yield takeEvery(t.UPDATE_TODO, updateTodo)
}

function* deleteTodo(action) {
    yield axios.delete(`${baseUrl}/todos/${action.todo.id}`, action.todo)
    yield put(actions.loadTodos())
}

function* watchDeleteTodo() {
    yield takeEvery(t.DELETE_TODO, deleteTodo)
}

export function* rootSaga() {
    yield all([
        wacthCreateTodo(),
        watchLoadTodos(),
        watchCompleteTodo(),
        watchUpdateTodo(),
        watchDeleteTodo()
    ])
}