import { CheckCircleIcon } from "@chakra-ui/icons";
import { Input, ListIcon, ListItem } from "@chakra-ui/react";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { actions, booksSelectors } from "../modules/booksSlice";
import { RootState, useRootDispatch } from "../modules/store";
import { AUTHORS, AuthorSelect } from "./AuthorSelect";

type Props = {
  bookId: string;
};

export const BookItem: React.FC<Props> = ({ bookId }) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <InputTextContainer bookId={bookId} />
      <AuthorSelectContainer bookId={bookId} />
    </ListItem>
  );
};

const getBookTitle = createSelector(
  booksSelectors.selectAll,
  (state: RootState, bookId: string) => bookId,
  (books, bookId) => {
    return books.find((b) => b.bookId === bookId)?.title;
  }
);

const InputTextContainer: React.FC<Props> = ({ bookId }) => {
  const bookTitle = useSelector((state: RootState) =>
    getBookTitle(state, bookId)
  );

  const dispatch = useRootDispatch();
  const handleChange = (newValue: string) => {
    dispatch(
      actions.updateTitle({
        bookId,
        title: newValue,
      })
    );
  };

  return (
    <>
      <ListIcon as={CheckCircleIcon} color="green.500" />
      <Input
        sx={{ ml: 5, mr: 1 }}
        type="text"
        value={bookTitle}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
};

const getBookAuthor = createSelector(
  booksSelectors.selectAll,
  (state: RootState, bookId: string) => bookId,
  (books, bookId) => {
    return books.find((b) => b.bookId === bookId)?.author;
  }
);

const AuthorSelectContainer: React.FC<Props> = ({ bookId }) => {
  const dispatch = useRootDispatch();
  const bookAuthor = useSelector((state: RootState) =>
    getBookAuthor(state, bookId)
  );

  // useEffect(() => {
  //   console.log(bookAuthor);
  //   console.log(bookId);
  // }, [bookAuthor, bookId]);

  if (!bookAuthor) {
    return null;
  }

  const handleSelect = (value: string) => {
    dispatch(
      actions.updateAuthor({
        bookId,
        author: AUTHORS.find((a) => a.authorId === value),
      })
    );
  };

  return (
    <AuthorSelect
      selectedAuthorId={bookAuthor.authorId || ""}
      selectAuthorId={handleSelect}
    />
  );
};
