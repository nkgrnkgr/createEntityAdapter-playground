import { List } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { booksSelectors } from "../modules/booksSlice";
import { BookItem } from "./BookItem";

export const BookList: React.FC = () => {
  const ids = useSelector(booksSelectors.selectIds);

  return (
    <List spacing={3}>
      {ids.map((id) => (
        <BookItem key={id} bookId={id.toString()} />
      ))}
    </List>
  );
};
