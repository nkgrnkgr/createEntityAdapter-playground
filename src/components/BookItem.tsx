import { CheckCircleIcon } from "@chakra-ui/icons";
import { ListIcon, ListItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { booksSelectors } from "../modules/booksSlice";
import { RootState } from "../modules/store";

type Props = {
  bookId: number;
};

export const BookItem: React.FC<Props> = ({ bookId }) => {
  const book = useSelector((state: RootState) =>
    booksSelectors.selectById(state, bookId)
  );

  if (!book) {
    return null;
  }

  return (
    <ListItem>
      <ListIcon as={CheckCircleIcon} color="green.500" />
      {book.title}
    </ListItem>
  );
};
