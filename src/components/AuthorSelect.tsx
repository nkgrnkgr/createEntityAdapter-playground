import { Select } from "@chakra-ui/react";
import { Author } from "../modules/booksSlice";

export const AUTHORS: Author[] = [
  {
    authorId: "1",
    name: "青山剛昌",
  },
  {
    authorId: "2",
    name: "尾田栄一郎",
  },
  {
    authorId: "3",
    name: "高橋留美子",
  },
];

type Props = {
  selectedAuthorId: string;
  selectAuthorId: (value: string) => void;
};

export const AuthorSelect: React.FC<Props> = ({
  selectAuthorId,
  selectedAuthorId,
}) => {
  return (
    <Select
      placeholder="Author"
      onChange={(e) => selectAuthorId(e.target.value)}
    >
      {AUTHORS.map((author) => (
        <option
          key={author.authorId}
          selected={selectedAuthorId === author.authorId}
          value={author.authorId}
        >
          {author.name}
        </option>
      ))}
    </Select>
  );
};
