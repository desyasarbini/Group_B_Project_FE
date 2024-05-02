import { useRouter } from "next/router";
import { Card } from "@/components";
import { Grid, Typography } from "@mui/material";

const ProjectById = () => {
  const router = useRouter();

  return (
    <Card className="container mx-auto overflow-hidden w-full">
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Card className="container flex flex-auto align-center justify-center">
            <Typography gutterBottom variant="h5" component="div">
              Title
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <div>xs=6 md=4</div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProjectById;
