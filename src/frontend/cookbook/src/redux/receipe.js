
  import { createSlice } from '@reduxjs/toolkit'
  // Slice
  const slice = createSlice({
    name: 'receipe', //name of the reducer
    initialState: {
      list: [],
    },
    reducers: {
      setReceipeList: (state, action) => {
        state.list = action.payload;
      },
      addReceipe : (state, action) => {
        state.list.push(action.payload);
      }
    },
  });
  
  // Actions
  export const { setReceipeList, addReceipe } = slice.actions

  export default slice.reducer;