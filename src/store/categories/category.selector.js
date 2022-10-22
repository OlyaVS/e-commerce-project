import { createSelector } from 'reselect';

// initial selector that gives back a slice of reducer we need
const selectCategoryReducer = (state) => state.categories;

// create a memoized selector, will re-run only if categoriesSlice is different
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

// as long as category array does not change do not re-run reduce
export const selectCategoriesMap = createSelector([selectCategories], (categories) =>
  categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);
