import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';

const rootReducer = combineReducers(userReducer);
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default store;
