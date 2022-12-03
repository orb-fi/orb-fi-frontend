import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { coingekoApi } from "./apis/coingekoApi";

import authReducer from "./authSlice";
import counterReducer from "./counterSlice";
import balanceSlice from "./balanceSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  balance: balanceSlice,
  [coingekoApi.reducerPath]: coingekoApi.reducer,
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
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(coingekoApi.middleware);
  },
  devTools: true,
});

setupListeners(store.dispatch);
export { useFetchValueQuery } from "./apis/coingekoApi";

export const persistor = persistStore(store);
