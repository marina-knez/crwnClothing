import { all, call } from 'redux-saga/effects';

import { categoriesSaga } from './categories/category.saga.ts';

import { userSagas } from './user/user.saga.ts';

export function* rootSaga() {
    yield all([call(categoriesSaga), call(userSagas)]);
}