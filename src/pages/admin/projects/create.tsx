import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { PROJECT_API } from "@/lib/ProjectApi";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const CreateProjectPage = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      project_image: "",
      project_name: "",
      description: "",
      target_amount: 1.0,
      end_date: "2024-05-01",
    },
    validationSchema: Yup.object({
      project_image: Yup.string().required("Required"),
      project_name: Yup.string().min(10).required("Required"),
      description: Yup.string().min(10).required("Required"),
      target_amount: Yup.number().required("Required"),
      end_date: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        if (!token) {
          throw new Error("Token not found. Please login.");
        }
        await axios.post(
          `${PROJECT_API}create`,
          {
            project_image: values.project_image,
            project_name: values.project_name,
            description: values.description,
            target_amount: values.target_amount,
            date_end: values.end_date,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } catch (error) {
        throw new Error("Failed to create data");
      }
      setSubmitting(false);
    },
  });

  return (
    <div className="flex min-h-full flex-col justify-center p-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
          New Project
        </h2>
      </div>

      <div className="m-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col justify-between">
            <div>
              <label
                htmlFor="project_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Project Name
              </label>

              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0.5 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="project_name"
                  type="text"
                  {...formik.getFieldProps("project_name")}
                />
              </div>
              {formik.touched.project_name && formik.errors.project_name ? (
                <div>{formik.errors.project_name}</div>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="project_image"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                URL Image
              </label>

              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="project_image"
                  type="text"
                  {...formik.getFieldProps("project_image")}
                />
              </div>
              {formik.touched.project_image && formik.errors.project_image ? (
                <div>{formik.errors.project_image}</div>
              ) : null}
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>

            <div className="mt-2">
              <textarea
                className="block w-full rounded-md border-0 p-1.5 h-35 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="description"
                rows="4"
                {...formik.getFieldProps("description")}
              />
            </div>
            {formik.touched.description && formik.errors.description ? (
              <div>{formik.errors.description}</div>
            ) : null}
          </div>

          <div className="flex justify-between">
            <div>
              <label
                htmlFor="target_amount"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Project Budget
              </label>
              <div className="mt-2">
                <input
                  className="rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="target_amount"
                  type="number"
                  {...formik.getFieldProps("target_amount")}
                />
              </div>
              {formik.touched.target_amount && formik.errors.target_amount ? (
                <div>{formik.errors.target_amount}</div>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="end_date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Deadline Project
              </label>
              <div className="mt-2">
                <input
                  className="rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="end_date"
                  type="date"
                  {...formik.getFieldProps("end_date")}
                />
              </div>
              {formik.touched.end_date && formik.errors.end_date ? (
                <div>{formik.errors.end_date}</div>
              ) : null}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="flex w-50 justify-center rounded-md bg-indigo-600 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  return <Navigate to="/admin/projects" />
};

export default CreateProjectPage;
