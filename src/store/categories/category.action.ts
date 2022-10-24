import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from '../../utils/reducer/reducer.utils';
import { CATEGORY_ACTION_TYPES, Category } from './category.types';

export type FetchCategoryStart = Action<CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START>;

export const fetchCategoryStart = withMatcher(
  (): FetchCategoryStart => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START)
);

export type FetchCategorySuccess = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export const fetchCategorySuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategorySuccess =>
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
);

export type FetchCategoryFailed = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

export const fetchCategoryFailed = withMatcher(
  (error: Error): FetchCategoryFailed =>
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);

export type CategoryAction = FetchCategoryStart | FetchCategorySuccess | FetchCategoryFailed;
