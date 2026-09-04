import { BookOpen, FileText, MoreVertical, Plus } from "lucide-react";

function Book({
  title,
  grade,
  field,
  level,
  lessons,
  questions,
  image,
  onDetails,
}) {
  return (
    <div className="relative bg-white cursor-default rounded-xl border border-gray-100 p-4 shadow-sm hover:shadow-lg transition-all duration-300 text-right">
      {/* top actions */}
      <div className="flex justify-between items-center mb-3">
        <button
          type="button"
          onClick={onDetails}
          className="text-gray-400 hover:text-violet-600 transition cursor-pointer"
          title="جزئیات کتاب"
        >
          <MoreVertical size={18} />
        </button>

        <button
          type="button"
          className="text-gray-400 hover:text-violet-600 transition cursor-pointer"
        >
          <Plus size={17} />
        </button>
      </div>

      {/* image */}
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="h-32 w-24 object-cover rounded-md shadow-sm"
        />
      </div>

      {/* title */}
      <h3 className="font-bold text-base text-gray-800">{title}</h3>

      {/* info */}
      <p className="text-xs text-gray-400 mt-2">
        {grade} - {field}
      </p>

      {/* level */}
      {level && (
        <span className="inline-flex mt-3 px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-medium">
          {level}
        </span>
      )}

      {/* footer */}
      <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <BookOpen size={15} className="text-violet-600" />
          <span className="font-bold">{lessons}</span>
        </div>

        <div className="flex items-center gap-1">
          <FileText size={15} className="text-violet-600" />
          <span className="font-bold">{questions}</span>
        </div>
      </div>
    </div>
  );
}

export default Book;
