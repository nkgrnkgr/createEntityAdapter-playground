import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "./store";

export type Author = {
  authorId: string;
  name: string;
};

type Book = {
  bookId: string;
  title: string;
  author?: Author;
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
    updateAuthor(
      state,
      action: PayloadAction<{ bookId: string; author?: Author }>
    ) {
      const { bookId, author } = action.payload;
      booksAdapter.updateOne(state, { id: bookId, changes: { author } });
    },
  },
});

export const booksSelectors = booksAdapter.getSelectors<RootState>(
  (state) => state.books
);
