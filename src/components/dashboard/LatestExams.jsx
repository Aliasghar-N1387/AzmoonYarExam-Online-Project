import { ClipboardList, ArrowLeft } from "lucide-react";

function LatestExams() {
  const exams = [
    {
      id: 1,
      title: "آزمون فصل ۳ ریاضی دهم",
      type: "تستی",
      date: "۱۴۰۳/۰۳/۱۴",
      status: "تکمیل شده",
      statusStyle: "bg-green-50 text-green-600",
    },
    {
      id: 2,
      title: "آزمون شیمی آلی (فصل ۲)",
      type: "تشریحی",
      date: "۱۴۰۳/۰۳/۱۲",
      status: "در حال تصحیح",
      statusStyle: "bg-yellow-50 text-yellow-600",
    },
    {
      id: 3,
      title: "آزمون جامع فیزیک",
      type: "تستی",
      date: "۱۴۰۳/۰۳/۱۰",
      status: "تکمیل شده",
      statusStyle: "bg-green-50 text-green-600",
    },
    {
      id: 4,
      title: "آزمون زیست شناسی دوازدهم",
      type: "تستی",
      date: "۱۴۰۳/۰۳/۰۸",
      status: "لغو شده",
      statusStyle: "bg-red-50 text-red-500",
    },
  ];

  return (
    <div
      className="bg-white rounded-lg border border-gray-300 p-6 text-right"
      dir="rtl"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <ClipboardList className="text-violet-900 size-4" />

          <h2 className="font-bold text-gray-800 text-sm">آخرین آزمون‌ها</h2>
        </div>

        <button className="text-violet-600 text-xs font-semibold">
          مشاهده همه
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 text-xs text-gray-400 pb-3 border-b border-gray-100">
        <span>عنوان</span>

        <span>نوع آزمون</span>

        <span>تاریخ</span>

        <span>وضعیت</span>
      </div>

      {/* List */}
      <div className="latest-scroll space-y-1 overflow-auto max-h-24">
        {exams.map((exam) => (
          <div
            key={exam.id}
            className="grid grid-cols-4 items-center py-4 border-b border-gray-100 text-xs
            "
          >
            <p
              className="text-gray-700 font-bold truncate max-w-35"
            >
              {exam.title}
            </p>

            <p className="text-gray-500 text-xs w-15 flex justify-center">
              {exam.type}
            </p>

            <p className="text-gray-400 text-xs w-15 flex justify-center pl-8">
              {exam.date}
            </p>

            <span
              className={`w-fit px-3 py-1 rounded-full text-[11px] font-bold text-xs ${exam.statusStyle}`}
            >
              {exam.status}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <button className="mt-6 flex items-center gap-2 text-violet-600 text-xs font-semibold hover:gap-4 transition-all">
        مشاهده همه آزمون‌ها
        <ArrowLeft size={15} />
      </button>
      
    </div>
  );
}

export default LatestExams;
