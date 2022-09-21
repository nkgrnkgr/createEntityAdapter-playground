import { List } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { booksSelectors } from "../modules/booksSlice";
import { BookItem } from "./BookItem";

export const BookList: React.FC = () => {
  const books = useSelector(booksSelectors.selectAll);

  return (
    <List spacing={3}>
      {books.map(({ bookId }) => (
        <BookItem key={bookId} bookId={bookId} />
      ))}
    </List>
  );
};
