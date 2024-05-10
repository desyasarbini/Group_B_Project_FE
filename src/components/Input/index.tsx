import { TextField } from "@mui/material";
import { Card } from "@/components";

interface Props {
  handleChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  value: string;
  name: string;
  type: string;
}

const Input = ({ handleChange, name, type }: Props) => {
  return (
    <Card className="">
      <TextField
        label={name}
        name={name}
        type={type}
        id="outlined-size-small"
        size="small"
        onChange={handleChange}
      />
    </Card>
  );
};
export default Input;
