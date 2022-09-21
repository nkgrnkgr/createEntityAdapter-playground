import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { actions } from "../modules/booksSlice";
import { useRootDispatch } from "../modules/store";

export const AddBookInputForm: React.FC = () => {
  const [title, setTitle] = useState("");

  const handleChange = (newValue: string) => {
    setTitle(newValue);
  };
  const dispatch = useRootDispatch();
  const handleClick = () => {
    const newId = uuid();
    dispatch(
      actions.addBook({
        book: {
          bookId: newId,
          title,
        },
      })
    );
    setTitle("");
  };

  return (
    <FormControl>
      <FormLabel>Book Title</FormLabel>
      <Input
        type="text"
        value={title}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Button onClick={handleClick}>Submit</Button>
    </FormControl>
  );
};
