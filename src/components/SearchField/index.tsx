import { Card, Input } from "@/components";
import { API_BASE } from "@/lib/ProjectApi";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";

interface Props {
  handleChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  value: string;
  name: string;
  type: string;
  title: string;
  isButton: boolean;
}

const SearchField = ({
  handleChange,
  value,
  name,
  type,
  title,
  isButton,
}: Props) => {
  const navigate = useRouter();

  return (
    <Card className="container mx-auto w-full">
      {/* ini adalah container untuk project header page */}
      <Card className="flex justify-between container md:justify-between">
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Card className="flex flex-row">
          <Input
            handleChange={handleChange}
            value={value}
            name={name}
            type={type}
          />
          {isButton ? (
            <Button
              onClick={() => {
                navigate.push(`${API_BASE}/admin/projects/create`);
              }}
            >
              Add Project
            </Button>
          ) : null}

          {isButton ? (
            <Button
              onClick={() => {
                localStorage.setItem("token", "");
              }}
            >
              Logout
            </Button>
          ) : null}
        </Card>
      </Card>
    </Card>
  );
};

export default SearchField;
