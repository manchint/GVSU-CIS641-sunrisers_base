
  import { createSlice } from '@reduxjs/toolkit'
  // Slice
  const slice = createSlice({
    name: 'comments', //name of the reducer
    initialState: {
      comments: [{name: 'User1', msg: 'Awesome'},
        {name: 'chef',msg: 'I should try this'}],
    },
    reducers: {
      setComments: (state, action) => {
        state.comments.push(action.payload);
      },
    },
  });
  
  // Actions
  export const { setComments } = slice.actions

  export default slice.reducer;