import { combineReducers } from '@reduxjs/toolkit';

import { authApi } from '@/services/authService';

import globalReducer from './global.store';
import tagsViewReducer from './tags-view.store';
import userReducer from './user.store';

const rootReducer = combineReducers({
  user: userReducer,
  tagsView: tagsViewReducer,
  global: globalReducer,
  [authApi.reducerPath]: authApi.reducer,
});

export default rootReducer;
