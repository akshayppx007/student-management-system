import { combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import persistedReducer from "./utils/persistReducer";
import departmentReducer from "./reducers/department/departmentReducer";


const reducer = combineReducers({
	persistReducer: persistedReducer,
	departments: departmentReducer,
});

let initialState = {
};


const store = configureStore({
	reducer: reducer,
	devTools: true,
    preloadedState: initialState,
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
	  immutableStateInvariantCheck: false,
    }).concat(thunkMiddleware),
});

export default store;
