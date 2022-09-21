import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { reducer as booksReducer } from "./booksSlice";
import { reducer as counterReducer } from "./counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  books: booksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createRootStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: true,
  });

const _rootStoreForDispatchType = createRootStore();

export type RootDispatch = typeof _rootStoreForDispatchType.dispatch;

export const useRootDispatch: () => RootDispatch = useDispatch;
