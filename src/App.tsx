import { Box, Container, Text } from "@chakra-ui/react";
import { AddBookInputForm } from "./components/AddBookInputForm";
import { BookList } from "./components/BookList";
import { Counter } from "./components/Counter";

export const App = () => {
  return (
    <Container
      sx={{
        mt: 10,
      }}
    >
      <Text>Counter</Text>
      <Box>
        <Counter />
      </Box>
      <Box
        sx={{
          m: 10,
        }}
      >
        <AddBookInputForm />
      </Box>
      <Box
        sx={{
          m: 10,
        }}
      >
        <BookList />
      </Box>
    </Container>
  );
};
