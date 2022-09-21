import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { booksSelectors } from "../modules/booksSlice";

export const Result: React.FC = () => {
  const books = useSelector(booksSelectors.selectAll);

  return (
    <Box
      sx={{
        w: "100%",
        p: 4,
        mt: 4,
        bgColor: "green.100",
      }}
    >
      <pre>{JSON.stringify(books, null, 2)}</pre>
    </Box>
  );
};
