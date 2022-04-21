import { createSelector } from 'reselect';
import commentsSlice from '../reducers/commentsReducer';

const getState = (state) => state.comments;
export const commentsSelector = createSelector([getState], (state) => state.comments);
