import { CardActions, Typography } from "@mui/material";

interface Props {
  percentage: string;
  target_amount: string;
}

const TargetRecap = ({ percentage, target_amount }: Props) => {
  const amount = parseFloat(target_amount);

  const formattedCurrency = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);

  return (
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
          {formattedCurrency}
        </Typography>
      </div>
    </CardActions>
  );
};

export default TargetRecap;
