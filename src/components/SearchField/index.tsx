import { Card, Input } from "@/components";
import { TextField, Typography } from "@mui/material";

interface Props {
  handleChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  value: string;
  name: string;
  type: string;
}

const SearchField = ({ handleChange, value, name, type }: Props) => {
  return (
    <Card className="container mx-auto w-full">
      {/* ini adalah container untuk project header page */}
      <Card className="flex justify-between container md:justify-between">
        <Typography gutterBottom variant="h5" component="div">
          Project Kami
        </Typography>

        <Input
          handleChange={handleChange}
          value={value}
          name={name}
          type={type}
        />
      </Card>
    </Card>
  );
};

export default SearchField;
