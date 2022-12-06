import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './search';
import userReducer from './user';
import receipeReducer from './receipe'

const store = configureStore({
  reducer : {
    search : searchReducer,
    user : userReducer,
    receipe : receipeReducer
  },
});

export default store;