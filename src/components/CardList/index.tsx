import { Card, CardItem } from "@/components";
import { AppContext } from "@/providers/AppProvider";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useContext } from "react";

interface Props {
  filteredProjects: any[];
}

const CardList = ({ filteredProjects }: Props) => {
  const navigate = useRouter();

  const handleClickedProject = (id: string) => {
    navigate.push(`/projects/${id}`);
  };

  return (
    <Card className="mx-auto container flex py-10 md:mx-200">
      <Grid container className="gap-5 justify-center">
        {filteredProjects.map((projects) => {
          const { id } = projects;
          return (
            <div
              id={id}
              onClick={() => {
                handleClickedProject(id);
              }}
            >
              <CardItem project={projects} />
            </div>
          );
        })}
      </Grid>
    </Card>
  );
};

export default CardList;
