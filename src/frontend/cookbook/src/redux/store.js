import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './search';
import userReducer from './user';
import receipeReducer from './receipe'
import commentsReducer from './comments'

const store = configureStore({
  reducer : {
    search : searchReducer,
    user : userReducer,
    receipe : receipeReducer,
    comments : commentsReducer
  },
});

export default store;