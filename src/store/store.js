import { configureStore } from '@reduxjs/toolkit'
import postReducer from './reducers/postReducer';
import commentsReducer from './reducers/commentsReducer';

export default configureStore({
    reducer: {
        posts: postReducer,
        comments: commentsReducer,
    }
})