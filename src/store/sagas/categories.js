import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as CategoriesActions } from '../ducks/categories';
import { Creators as ErrorActions } from '../ducks/error';

export function* getCategories() {
  try {
    const response = yield call(api.get, '/categories');
    yield put(CategoriesActions.getCategoriesSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possivel obter os produtos'));
  }
}
