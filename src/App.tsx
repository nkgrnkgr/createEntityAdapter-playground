import { Box, Text } from "@chakra-ui/react";
import { Counter } from "./components/Counter";

export const App = () => {
  return (
    <Box>
      <Text>Counter</Text>
      <Box>
        <Counter />
      </Box>
    </Box>
  );
};
