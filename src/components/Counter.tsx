import { Box, Button, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { actions } from "../modules/counterSlice";
import { RootState, useRootDispatch } from "../modules/store";

export const Counter: React.FC = () => {
  const { count } = useSelector<RootState, RootState["counter"]>(
    (state) => state.counter
  );
  const dispatch = useRootDispatch();

  const handleClick = () => {
    dispatch(actions.incrementWithAmount({ amount: 2 }));
  };

  return (
    <Box>
      <Text>count is {count}</Text>
      <Button onClick={handleClick}>Add</Button>
    </Box>
  );
};
