import { useRouter } from "next/router";
import { Card } from "@/components";
import { Grid } from "@mui/material";

const ProjectById = () => {
  const router = useRouter();

  return (
    <Card className="">
      <Card className="flex flex-auto">
        <Grid className="">
          <div>Ini adalah halaman project by id: {router.query.id}</div>
        </Grid>
      </Card>
    </Card>
  );
};

export default ProjectById;
