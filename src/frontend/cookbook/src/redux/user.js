
  import { createSlice } from '@reduxjs/toolkit'
  // Slice
  const slice = createSlice({
    name: 'user', //name of the reducer
    initialState: {
      user: {},
    },
    reducers: {
      setUserDetails: (state, action) => {
        state.user = action.payload;
      },
      logOut : (state, action) => {
        state.user = action.payload;
      }
    },
  });
  
  // Actions
  export const { setUserDetails, logOut } = slice.actions

  export default slice.reducer;