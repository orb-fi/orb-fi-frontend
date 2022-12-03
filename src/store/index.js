import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authSlice";
import counterReducer from "./counterSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});

const persistedReducer = persistReducer(
  {
    key: "orbfi",
    storage: storage,
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export const persistor = persistStore(store);
