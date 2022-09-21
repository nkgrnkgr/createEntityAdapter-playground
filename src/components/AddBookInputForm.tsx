import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { actions } from "../modules/booksSlice";
import { useRootDispatch } from "../modules/store";
import { AUTHORS, AuthorSelect } from "./AuthorSelect";

export const AddBookInputForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [selectedAuthorId, selectAuthorId] = useState("");

  const handleChange = (newValue: string) => {
    setTitle(newValue);
  };
  const dispatch = useRootDispatch();
  const handleSelect = (value: string) => {
    selectAuthorId(value);
  };
  const handleClick = () => {
    const newId = uuid();
    const author = AUTHORS.find((a) => a.authorId === selectedAuthorId);
    dispatch(
      actions.addBook({
        book: {
          bookId: newId,
          title,
          author,
        },
      })
    );
    setTitle("");
  };

  return (
    <FormControl>
      <FormLabel>Book Title</FormLabel>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Input
          type="text"
          value={title}
          onChange={(e) => handleChange(e.target.value)}
        />
        <AuthorSelect
          selectedAuthorId={selectedAuthorId}
          selectAuthorId={handleSelect}
        />
        <Button onClick={handleClick}>追加</Button>
      </Box>
    </FormControl>
  );
};
