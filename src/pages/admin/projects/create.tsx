import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { PROJECT_API } from "@/lib/ProjectApi";

const CreateProjectPage = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      image: "",
      projectName: "",
      description: "",
      targetAmount: "",
      dateEnd: "",
    },
    validationSchema: Yup.object({
      image: Yup.string().required("Required"),
      projectName: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      targetAmount: Yup.number().required("Required"),
      dateEnd: Yup.date().required("Required").min(new Date(2024, 0, 1)),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await axios.post(`${PROJECT_API}create`, {
          project_image: values.image,
          project_name: values.projectName,
          description: values.description,
          target_amount: values.targetAmount,
          date_end: values.dateEnd,
        });
        console.log(response.data);
      } catch (error) {
        throw new Error("Failed to create data");
      }
      setSubmitting(false);
    },
  });

  // Function to handle input change for targetAmount field
  const handleTargetAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove non-numeric characters from the input value
    const numericValue = value.replace(/[^0-9]/g, '');
    formik.setFieldValue('targetAmount', numericValue); // Update Formik field value
  };

  return (
    <div className="flex min-h-full flex-col justify-center p-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
          New Project
        </h2>
      </div>

      <div className="m-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div className="flex justify-between">
            <div>
              <label
                htmlFor="projectName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Project Name
              </label>

              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="projectName"
                  type="text"
                  {...formik.getFieldProps("projectName")}
                />
              </div>
              {formik.touched.projectName && formik.errors.projectName ? (
                <div>{formik.errors.projectName}</div>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                URL Image
              </label>

              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="image"
                  type="text"
                  {...formik.getFieldProps("image")}
                />
              </div>
              {formik.touched.image && formik.errors.image ? (
                <div>{formik.errors.image}</div>
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
                htmlFor="targetAmount"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Project Budget
              </label>
              <div className="mt-2">
                <input
                  className="rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="targetAmount"
                  type="text"
                  {...formik.getFieldProps("targetAmount")}
                />
              </div>
              {formik.touched.targetAmount && formik.errors.targetAmount ? (
                <div>{formik.errors.targetAmount}</div>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="dateEnd"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Deadline Project
              </label>
              <div className="mt-2">
                <input
                  className="rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="dateEnd"
                  type="date"
                  {...formik.getFieldProps("dateEnd")}
                />
              </div>
              {formik.touched.dateEnd && formik.errors.dateEnd ? (
                <div>{formik.errors.dateEnd}</div>
              ) : null}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="cacel"
              className="flex w-50 justify-center rounded-md bg-red-600 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Cancel
            </button>
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
};

export default CreateProjectPage;
