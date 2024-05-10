import { TextField } from "@mui/material";
import { Card } from "@/components";

interface Props {
  label: string;
  name: string;
  type: string;
}

const Input = ({ label, name, type }: Props) => {
  return (
    <Card className="">
      <TextField
        label={label}
        name={name}
        type={type}
        id="outlined-size-small"
        size="small"
      />
    </Card>
  );
};
export default Input;
