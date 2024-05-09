import { useRouter } from "next/router";
import { Card, Input, TargetRecap } from "@/components";
import { Button, CardMedia, Grid, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";
import { getProjectDetails } from "@/lib/ProjectApi";

const ProjectById = () => {
  const router = useRouter();
  router.query.id;

  // useEffect(() => {
  //   const getProject = async () => {
  //     const get = await getProjectList();
  //     setProjects(get);
  //   };
  //   getProject();
  // }, []);
  return (
    <Card className="container mx-auto overflow-hidden w-full flex ">
      <Grid container spacing={2} className="p-9 h-screen">
        <Grid item xs={12} md={8}>
          <Card className="">
            <Card className="">
              <Typography gutterBottom variant="body1" component="div">
                Project Detail
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Title
              </Typography>
            </Card>
            <Card className="">
              <Typography gutterBottom variant="body1" component="div">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                image="https://i.ibb.co/34d6Bnb/original-dd6082722592575153842caf2b0cdc40.png"
                alt="dummy"
              />
            </Card>
            <Card className="">
              <TargetRecap percentage={"30"} target_amount={"10000000"} />
            </Card>
            <Card className="relative py-8 ">
              <Typography gutterBottom variant="h5" component="div">
                Mari ikut berpartisipasi!
              </Typography>
              <Input
                handleChange={undefined}
                value=""
                name="Email"
                type="text"
              />
              <Input
                handleChange={undefined}
                value=""
                name="No HP"
                type="text"
              />
              <Input
                handleChange={undefined}
                value=""
                name="Jumlah Donasi"
                type={""}
              />
            </Card>
            <Card className="">
              <Button variant="contained" endIcon={<Send />}>
                DONATE
              </Button>
            </Card>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProjectById;
