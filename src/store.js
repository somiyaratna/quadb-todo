import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import taskReducer from "./taskSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "tasks",
  storage,
};

const reducer = combineReducers({
  task: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
