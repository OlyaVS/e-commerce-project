import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoryFailed, fetchCategorySuccess } from './category.action';
import { CATEGORY_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    yield put(fetchCategorySuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoryFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

// accumulator that holds all of sagas related to category
export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
