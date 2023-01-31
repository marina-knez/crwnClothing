import { createSelector } from 'reselect';

import { RootState } from '../store.ts';

import { CategoriesState } from './category.reducer';

import { CategoryMap } from './category.types';

const selectCategoriesReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => categories.reduce(
    (acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    },
    {} as CategoryMap)
  );

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);