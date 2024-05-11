import { Card, Input } from "@/components";
import { API_BASE } from "@/lib/ProjectApi";
import { AppContext } from "@/providers/AppProvider";
import { Button, Typography } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useContext } from "react";

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
  const { setAuth } = useContext(AppContext);

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
                navigate.push(`/admin/projects/create`);
              }}
            >
              Add Project
            </Button>
          ) : null}

          {isButton ? (
            <Button
              onClick={() => {
                localStorage.setItem("token", "");
                navigate.push("/admin/login");
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
