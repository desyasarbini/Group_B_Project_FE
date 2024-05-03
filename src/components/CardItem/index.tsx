import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";

import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";
import TargetRecap from "../TargetRecap";

interface Detail {
  admin_id: number;
  description: string;
  end_date: string;
  id: number;
  percentage: string;
  project_image: string;
  project_name: string;
  target_amount: string;
}

interface Props {
  project: Detail;
}

const CardItem: React.FC<Props> = ({ project }: Props) => {
  const {
    description,
    end_date,
    percentage,
    project_image,
    project_name,
    target_amount,
  } = project;

  const [showLess, setShowLess] = useState("");

  useEffect(() => {
    {
      const data = description.substring(0, 250);
      setShowLess(data);
    }
  }, []);
  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={project_image}
          alt={project_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {showLess}
          </Typography>
        </CardContent>
      </CardActionArea>
      <TargetRecap percentage={percentage} target_amount={target_amount} />
      <hr />
      <CardContent className="px-5 py-0 my-0 pt-2 flex-row align-center">
        <Typography gutterBottom variant="body2" component="div">
          Sampai dengan:
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {end_date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
