import { Card } from "@/components";
import { Button } from "@mui/material";

const Projects = () => {
  return (
    <Card className="">
      <Card className="container mx-auto w-full">
        {/* ini adalah container untuk project header page */}
        <Card className="flex justify-between container md:j">
          <Card className="container">
            <h2>List of Project</h2>
          </Card>
          <Card className="container">
            <input className="" placeholder="Search" />
            <Button variant="contained" size="small">
              Small
            </Button>
          </Card>
        </Card>
      </Card>
      {/* ini adalah container untuk lsit of project Card */}
      <Card className="container grid-3 bg-green-800">
        {/* ini adalah container untuk project card */}
        <div className="flex"></div>
      </Card>
    </Card>
  );
};

export default Projects;
