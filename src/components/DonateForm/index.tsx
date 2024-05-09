import { Card, Input } from "@/components";
import { Button, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useRouter } from "next/router";
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { API_BASE } from "@/lib/ProjectApi";

const DonateForm = () => {
  const navigate = useRouter();
  console.log(navigate.query.id);

  const formik = useFormik({
    initialValues: {
      email: "",
      phone_number: "",
      amount: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
      phone_number: Yup.string().required("Required"),
      amount: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await axios.post(`${API_BASE}donation/create`, {
          project_id: navigate.query.id,
          email: values.email,
          phone_number: values.phone_number,
          amount: values.amount,
        });
        console.log(response.data);
      } catch (error) {
        setErrors({
          email: "Invalid email format",
          phone_number: "Invalid phone number format",
          amount: "Invalid amount format",
        });
      }
      setSubmitting(false);
    },
  });

  return (
    <Card className="relative py-8 ">
      <Typography gutterBottom variant="h5" component="div">
        Mari ikut berpartisipasi!
      </Typography>
      <form
        className="flex flex-auto flex-col gap-2"
        onSubmit={formik.handleSubmit}
      >
        <Input handleChange={undefined} value="" name="Email" type="text" />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <Input handleChange={undefined} value="" name="No HP" type="text" />
        <Input
          handleChange={undefined}
          value=""
          name="Jumlah Donasi"
          type={""}
        />
        <Button
          type="submit"
          className="w-1/2"
          // disabled={formik.isSubmitting}
          variant="contained"
          endIcon={<Send />}
        >
          DONATE
        </Button>
      </form>
    </Card>
  );
};

export default DonateForm;
