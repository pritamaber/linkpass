// src/pages/Login.jsx

import { useFormik } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

/**
 * Login Page - uses Formik for form handling and Firebase for login
 */
export default function Login() {
  const navigate = useNavigate();

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(6, "At least 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        navigate("/dashboard"); // redirect on success
      } catch (err) {
        setErrors({ password: "Invalid email or password" });
        setSubmitting(false);
      }
    },
  });

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Don't have an account?"
      linkText="Signup"
      linkTo="/signup"
    >
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-sm text-red-500">{formik.errors.email}</p>
          )}
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-sm text-red-500">{formik.errors.password}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
        >
          {formik.isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </AuthLayout>
  );
}
