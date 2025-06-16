import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { toast } from "react-hot-toast";
/**
 * LinkCard - shows a single saved link with delete option
 */
export default function LinkCard({ link }) {
  const handleDelete = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this link?"
    );
    if (!confirm) return;

    const deleting = toast.loading("Deleting...");

    try {
      await deleteDoc(doc(db, "links", link.id));
      toast.success("Link deleted successfully", { id: deleting });
    } catch (error) {
      toast.error("Failed to delete", { id: deleting });
      console.error("❌ Failed to delete:", error);
    }
  };
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-200 relative">
      <h3 className="text-lg font-semibold text-gray-800">{link.title}</h3>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-sm hover:underline break-all"
      >
        {link.url}
      </a>
      {link.notes && (
        <p className="mt-2 text-sm text-gray-600 whitespace-pre-line">
          {link.notes}
        </p>
      )}

      {/* Delete Button */}
      <button
        onClick={handleDelete}
        className="absolute top-2 right-2 text-red-500 text-xs hover:underline"
      >
        Delete
      </button>
    </div>
  );
}
