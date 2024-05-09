import { Card, Input } from "@/components";
import { Button, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";

const DonateForm = () => {
  return (
    <Card className="relative py-8 ">
      <Typography gutterBottom variant="h5" component="div">
        Mari ikut berpartisipasi!
      </Typography>
      <Input handleChange={undefined} value="" name="Email" type="text" />
      <Input handleChange={undefined} value="" name="No HP" type="text" />
      <Input handleChange={undefined} value="" name="Jumlah Donasi" type={""} />
      <Card className="">
        <Button variant="contained" endIcon={<Send />}>
          DONATE
        </Button>
      </Card>
    </Card>
  );
};

export default DonateForm;
