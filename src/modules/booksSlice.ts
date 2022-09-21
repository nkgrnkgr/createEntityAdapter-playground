import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "./store";

type Book = {
  bookId: string;
  title: string;
};

const booksAdapter = createEntityAdapter<Book>({
  selectId: (book) => book.bookId,
});

export const { actions, reducer } = createSlice({
  name: "books",
  initialState: booksAdapter.getInitialState(),
  reducers: {
    addBook(state, action: PayloadAction<{ book: Book }>) {
      booksAdapter.addOne(state, action.payload.book);
    },
    updateTitle(
      state,
      action: PayloadAction<{ bookId: string; title: string }>
    ) {
      const { bookId, title } = action.payload;
      booksAdapter.updateOne(state, { id: bookId, changes: { title } });
    },
  },
});

export const booksSelectors = booksAdapter.getSelectors<RootState>(
  (state) => state.books
);
