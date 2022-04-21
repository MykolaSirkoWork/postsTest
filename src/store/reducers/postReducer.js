import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
}
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
        state.posts = action.payload;
    },
  },
  
})

export default postsSlice.reducer