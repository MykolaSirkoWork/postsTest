import React, { useEffect } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { getPosts } from '../store/reducers/postReducer';
import { postsSelector } from '../store/selectors/postReducer';
import PostItem from './PostItem';

const Post = () =>{ 
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts())
    }, [])
    
       
    const list = useSelector((state) => postsSelector(state));
    
    
    return (
        <div style={{ width: '100%', height: '100%', margin: "0 auto" }}>
            <PostItem item = {list}  />
        </div>
    )
}

export default Post;