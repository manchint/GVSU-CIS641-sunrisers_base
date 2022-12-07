
  import { createSlice } from '@reduxjs/toolkit'
  // Slice
  const slice = createSlice({
    name: 'receipe', //name of the reducer
    initialState: {
      list: [
        { id:1, itemName: 'Chicken Tikka Masala', likes: 231},
        { id:2, itemName: 'Potato Fry', likes : 32},
        { id:3, itemName: 'Lamb fry', likes: 541},
        { id:4, itemName: 'Biryani', likes : 543},
        { id:5, itemName: 'Frozen Ice Cream', likes : 532},   
      ],
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