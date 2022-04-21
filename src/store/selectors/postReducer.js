import { createSelector } from 'reselect';
import postsSlice from '../reducers/postReducer';

const getState = (state) => state.posts;
export const postsSelector = createSelector([getState], (state) => state.posts);
