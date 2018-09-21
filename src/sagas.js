import axios from 'axios';
import { all, put, takeEvery } from 'redux-saga/effects'
import {actions, t} from './actions';

const baseUrl = 'https://apinator.com/api/v1';

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

export function* rootSaga() {
    yield all([
        wacthCreateTodo(),
        watchLoadTodos()
    ])
}