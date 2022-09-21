import { Box, Container } from "@chakra-ui/react";
import { AddBookInputForm } from "./components/AddBookInputForm";
import { BookList } from "./components/BookList";
import { Result } from "./components/Result";

export const App = () => {
  return (
    <Container
      sx={{
        mt: 10,
      }}
    >
      <Box
        sx={{
          mb: 10,
        }}
      >
        <AddBookInputForm />
      </Box>
      <Box sx={{}}>
        <BookList />
      </Box>
      <Result />
    </Container>
  );
};
