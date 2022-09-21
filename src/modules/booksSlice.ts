import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

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
      action: PayloadAction<{ bookId: string; newTitle: string }>
    ) {
      const { bookId, newTitle } = action.payload;
      booksAdapter.setOne(state, {
        bookId,
        title: newTitle,
      });
    },
  },
});

export const booksSelectors = booksAdapter.getSelectors<RootState>(
  (state) => state.books
);
