import { useRouter } from "next/router";
import { Card, DonateForm, TargetRecap } from "@/components";
import { CardMedia, Grid, Typography } from "@mui/material";
import { getProjectDetails } from "@/lib/ProjectApi";
import { useEffect, useState } from "react";

import { Project } from "@/lib/ProjectApi";

const ProjectById = () => {
  const [projectsDetail, setProjectsDetail] = useState<Project | null>();
  const router = useRouter();

  const projectId = router.query.id;

  useEffect(() => {
    const getProject = async (id: string | string[] | undefined) => {
      const get = await getProjectDetails(id);
      setProjectsDetail(get);
    };
    getProject(projectId);
  }, []);

  return (
    <Card className="container mx-auto overflow-hidden w-full flex ">
      <Grid container spacing={2} className="p-9 h-screen">
        <Grid item xs={12} md={8}>
          <Card className="">
            <Card className="">
              <Typography
                gutterBottom
                variant="body1"
                component="div"
              ></Typography>
              <Typography gutterBottom variant="h5" component="div">
                {projectsDetail?.project_name}
              </Typography>
            </Card>
            <Card className="">
              <Typography gutterBottom variant="body1" component="div">
                {projectsDetail?.description}
              </Typography>
            </Card>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="">
            <Card className="align-center flex justify-center h-full w-full md:w-full">
              <CardMedia
                component="img"
                height="140"
                image={projectsDetail?.project_image}
                alt="dummy"
              />
            </Card>
            <Card className="">
              <TargetRecap
                percentage={String(projectsDetail?.percentage)}
                target_amount={String(projectsDetail?.target_amount)}
              />
            </Card>
            <DonateForm />
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProjectById;
