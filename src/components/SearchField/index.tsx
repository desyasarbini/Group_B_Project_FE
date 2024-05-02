import { Card } from "@/components";
import { TextField, Typography } from "@mui/material";

interface Props {
  handleChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}

const SearchField = ({ handleChange }: Props) => {
  return (
    <Card className="container mx-auto w-full">
      {/* ini adalah container untuk project header page */}
      <Card className="flex justify-between container md:justify-between">
        <Typography gutterBottom variant="h5" component="div">
          Project Kami
        </Typography>
        <Card className="">
          <TextField
            label="Cari Project"
            id="outlined-size-small"
            size="small"
            onChange={handleChange}
          />
        </Card>
      </Card>
    </Card>
  );
};

export default SearchField;
