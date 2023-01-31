import { createSelector } from 'reselect';

import { RootState } from '../store.ts';

import { UserState } from './user.reducer.ts';

export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(selectUserReducer, (user) => user.currentUser);