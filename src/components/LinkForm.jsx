// src/components/LinkForm.jsx

import { useFormik } from "formik";
import * as Yup from "yup";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";
import { toast } from "react-hot-toast";

/**
 * LinkForm - allows logged-in user to add a new link to Firestore
 */
export default function LinkForm({ user }) {
  const formik = useFormik({
    initialValues: {
      title: "",
      url: "",
      notes: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      url: Yup.string().url("Invalid URL").required("URL is required"),
      notes: Yup.string(),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const saving = toast.loading("Saving...");

      try {
        await addDoc(collection(db, "links"), {
          ...values,
          userId: user.uid,
          createdAt: serverTimestamp(),
        });
        toast.success("Link saved ✅", { id: saving });
        resetForm();
      } catch (error) {
        toast.error("Failed to save link ❌", { id: saving });
        console.error("Save error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-4 bg-white p-4 rounded-xl shadow-md"
    >
      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {formik.touched.title && formik.errors.title && (
          <p className="text-sm text-red-500">{formik.errors.title}</p>
        )}
      </div>

      {/* URL */}
      <div>
        <label className="block text-sm font-medium text-gray-700">URL</label>
        <input
          type="url"
          name="url"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.url}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {formik.touched.url && formik.errors.url && (
          <p className="text-sm text-red-500">{formik.errors.url}</p>
        )}
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Notes (optional)
        </label>
        <textarea
          name="notes"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.notes}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={3}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
      >
        {formik.isSubmitting ? "Saving..." : "Save Link"}
      </button>
    </form>
  );
}
