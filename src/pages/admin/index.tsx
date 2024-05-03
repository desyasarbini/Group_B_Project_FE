import { Heading, Text } from "../../components";
import * as yup from "yup";
import { useFormik } from "formik";
import { Navigate } from "react-router-dom";

const RegisterPage = () => {
  const token = localStorage.getItem("token");

  const submitSignIn = async (user: { email: any; password: any }) => {
    try {
      const response = await fetch(
        "https://mock-api.arikmpt.com/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            password: user.password,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      if (data?.data.token) {
        localStorage.setItem("token", data.data.token);
      }
    } catch (err) {
      alert("Cek lagi mas! Email sama Passwornya!");
    }
  };

  const formMik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      submitSignIn(values);
      resetForm();
      alert("Gass daftarkan kategorimu");
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .min(8, "ya kali emai cuma segitu karakternya")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Input The proper email coyys"
        )
        .required("Please fill the username"),
      password: yup
        .string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/,
          "Password combination must be at least 10 characters, include at least one lowercase letter, one uppercase letter, one number, and one special character"
        )
        .required("Please fill the passord"),
    }),
  });

  const { errors, values, handleChange, handleSubmit } = formMik;
  const { email, password } = values;
  if (!token) {
    return (
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Heading title="Ayo sini kumpul gengs!" />
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  name="email"
                  type="email"
                  onChange={handleChange("email")}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              {errors.email && <Text>{errors.email}</Text>}
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  value={password}
                  name="password"
                  type="password"
                  onChange={handleChange("password")}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.password && <Text>{errors.password}</Text>}
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  return <Navigate to="/" />;
};

export default RegisterPage;
