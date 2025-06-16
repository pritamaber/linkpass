// src/components/Searchbar.jsx

export default function Searchbar({ value, onChange }) {
  return (
    <div className="mb-6 flex justify-center">
      <input
        type="text"
        placeholder="Search links..."
        value={value}
        onChange={onChange}
        className="w-full max-w-md px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
      />
    </div>
  );
}
