import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { authReducer } from '../reducers/userReducers';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
    authUser : authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;