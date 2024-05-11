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
        navigate.push("/projects");
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
        <input
          className="rounded-md border-1 shadow-sm ring-1 ring-inset ring-gray-300 py-1.5 px-1"
          type="text"
          placeholder="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <input
          className="rounded-md border-1 shadow-sm ring-1 ring-inset ring-gray-300 py-1.5 px-1"
          type="text"
          placeholder="No Hp"
          {...formik.getFieldProps("phone_number")}
        />
        {formik.touched.phone_number && formik.errors.phone_number ? (
          <div>{formik.errors.phone_number}</div>
        ) : null}
        <input
          className="rounded-md border-1 shadow-sm ring-1 ring-inset ring-gray-300 py-1.5 px-1"
          type="text"
          placeholder="Jumlah Donasi"
          {...formik.getFieldProps("amount")}
        />
        {formik.touched.amount && formik.errors.amount ? (
          <div>{formik.errors.amount}</div>
        ) : null}
        <Button
          type="submit"
          className="w-1/2"
          disabled={formik.isSubmitting}
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
