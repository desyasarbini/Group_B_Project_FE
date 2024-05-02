import React from "react";
import Card from "@mui/material/Card";

import {
  CardActionArea,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";

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
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Tercapai:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${percentage}%`}
          </Typography>
        </div>
        <div
          className="flex flex-col align-center"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Kebutuhan:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Rp.${target_amount}`}
          </Typography>
        </div>
      </CardActions>
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
