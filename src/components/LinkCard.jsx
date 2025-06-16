// src/components/LinkCard.jsx

export default function LinkCard({ link }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
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
    </div>
  );
}
