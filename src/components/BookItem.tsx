import { CheckCircleIcon } from "@chakra-ui/icons";
import { Input, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { actions, booksSelectors } from "../modules/booksSlice";
import { RootState, useRootDispatch } from "../modules/store";
import { AUTHORS, AuthorSelect } from "./AuthorSelect";

type Props = {
  bookId: string;
};

export const BookItem: React.FC<Props> = ({ bookId }) => {
  const book = useSelector((state: RootState) =>
    booksSelectors.selectById(state, bookId)
  );

  const dispatch = useRootDispatch();

  if (!book) {
    return null;
  }

  const handleSelect = (value: string) => {
    dispatch(
      actions.updateAuthor({
        bookId: book.bookId,
        author: AUTHORS.find((a) => a.authorId === value),
      })
    );
  };

  const handleChange = (newValue: string) => {
    dispatch(
      actions.updateTitle({
        bookId: book.bookId,
        title: newValue,
      })
    );
  };

  return (
    <ListItem
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <ListIcon as={CheckCircleIcon} color="green.500" />
      <Text w="200px">{book.title}</Text>
      <Input
        sx={{ ml: 5, mr: 1 }}
        type="text"
        value={book.title}
        onChange={(e) => handleChange(e.target.value)}
      />
      <AuthorSelect
        selectedAuthorId={book.author?.authorId || ""}
        selectAuthorId={handleSelect}
      />
    </ListItem>
  );
};
