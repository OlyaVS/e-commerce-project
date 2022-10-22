import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORY_ACTION_TYPES } from './category.types';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const fetchCategoryStart = () => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategorySuccess = (categoriesArray) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoryFailed = (error) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// this action creator function is an async and a thunk
export const fetchCategoriesAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoryStart());
    console.log('111');
    try {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(fetchCategorySuccess(categoriesArray));
    } catch (error) {
      dispatch(fetchCategoryFailed(error));
    }
  };
};
