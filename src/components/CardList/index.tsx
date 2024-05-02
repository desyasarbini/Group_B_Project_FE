import { Card, CardItem } from "@/components";
import { Grid } from "@mui/material";

interface Props {
  filteredProjects: any[];
}

const CardList = ({ filteredProjects }: Props) => {
  return (
    <Card className="mx-auto container flex py-10 md:mx-200">
      <Grid container className="gap-5 justify-center">
        {filteredProjects.map((projects, id) => {
          return (
            <div id={String(id)}>
              <CardItem project={projects} />
            </div>
          );
        })}
      </Grid>
    </Card>
  );
};

export default CardList;
