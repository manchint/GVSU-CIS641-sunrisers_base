
  import { createSlice } from '@reduxjs/toolkit'
  // Slice
  const slice = createSlice({
    name: 'search', //name of the reducer
    initialState: {
      text: '',
    },
    reducers: {
      setSearchText: (state, action) => {
        state.text = action.payload;
      }
    },
  });
  
  // Actions
  export const { setSearchText } = slice.actions

  export default slice.reducer;