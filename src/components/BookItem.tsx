import { CheckCircleIcon } from "@chakra-ui/icons";
import { Input, ListIcon, ListItem } from "@chakra-ui/react";
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

const InputTextContainer: React.FC<Props> = ({ bookId }) => {
  const title = useSelector(
    (state: RootState) => booksSelectors.selectById(state, bookId)?.title
  );

  if (!title) {
    return null;
  }

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
        value={title}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
};

const AuthorSelectContainer: React.FC<Props> = ({ bookId }) => {
  const dispatch = useRootDispatch();
  const bookAuthor = useSelector(
    (state: RootState) => booksSelectors.selectById(state, bookId)?.author
  );

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
