import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getComments = createAsyncThunk(
  'posts/getComments',
  async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return response.data;
}
)

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
  },
  extraReducers: {
    [getComments.fulfilled]: (state, action) => {
        state.comments = action.payload;
    },
  },
  
})
export default commentsSlice.reducer