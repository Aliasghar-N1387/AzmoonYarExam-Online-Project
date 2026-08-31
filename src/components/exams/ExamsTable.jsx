import {
  MoreVertical,
  FileText,
  Pencil,
  Trash2,
  Eye,
  BookOpen,
  GraduationCap,
  CalendarDays,
} from "lucide-react";

const ExamsTable = () => {
  const exams = [
    {
      id: 1,
      title: "آزمون میان ترم فیزیک (پایه دهم)",
      lesson: "فیزیک",
      grade: "متوسطه دوم",
      type: "تستی + تشریحی",
      date: "۱۴۰۳/۰۶/۱۵",
      status: "آماده",
      statusColor: "green",
    },
    {
      id: 2,
      title: "آزمون پایان ترم ریاضی (پایه هفتم)",
      lesson: "ریاضی",
      grade: "متوسطه اول",
      type: "چهارگزینه‌ای",
      date: "۱۴۰۳/۰۶/۱۴",
      status: "برگزار شده",
      statusColor: "blue",
    },
    {
      id: 3,
      title: "آزمون جبرانی تاریخ (پایه یازدهم)",
      lesson: "تاریخ",
      grade: "متوسطه دوم",
      type: "تشریحی",
      date: "۱۴۰۳/۰۶/۱۰",
      status: "پیش‌نویس",
      statusColor: "orange",
    },
    {
      id: 4,
      title: "آزمون تستی زیست (دانشگاه)",
      lesson: "زیست‌شناسی",
      grade: "دانشگاه",
      type: "تستی",
      date: "۱۴۰۳/۰۶/۰۸",
      status: "آماده",
      statusColor: "green",
    },
    {
      id: 5,
      title: "آزمون کوتاه پاسخ ادبیات (پایه نهم)",
      lesson: "ادبیات",
      grade: "متوسطه اول",
      type: "کوتاه پاسخ",
      date: "۱۴۰۳/۰۶/۰۵",
      status: "برگزار شده",
      statusColor: "blue",
    },
    {
      id: 6,
      title: "آزمون نوبت اول شیمی (پایه دهم)",
      lesson: "شیمی",
      grade: "متوسطه دوم",
      type: "تستی",
      date: "۱۴۰۳/۰۶/۰۳",
      status: "آماده",
      statusColor: "green",
    },
    {
      id: 6,
      title: "آزمون نوبت اول شیمی (پایه دهم)",
      lesson: "شیمی",
      grade: "متوسطه دوم",
      type: "تستی",
      date: "۱۴۰۳/۰۶/۰۳",
      status: "آماده",
      statusColor: "green",
    },
    {
      id: 6,
      title: "آزمون نوبت اول شیمی (پایه دهم)",
      lesson: "شیمی",
      grade: "متوسطه دوم",
      type: "تستی",
      date: "۱۴۰۳/۰۶/۰۳",
      status: "آماده",
      statusColor: "green",
    },
    {
      id: 6,
      title: "آزمون نوبت اول شیمی (پایه دهم)",
      lesson: "شیمی",
      grade: "متوسطه دوم",
      type: "تستی",
      date: "۱۴۰۳/۰۶/۰۳",
      status: "آماده",
      statusColor: "green",
    },
  ];

  const statusStyles = {
    green: {
      dot: "bg-green-500",
      bg: "bg-green-50",
      text: "text-green-600",
    },
    blue: {
      dot: "bg-blue-500",
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
    orange: {
      dot: "bg-orange-400",
      bg: "bg-orange-50",
      text: "text-orange-600",
    },
  };

  const typeStyles = {
    "تستی + تشریحی": "bg-violet-800/20 text-violet-700",
    چهارگزینه‌ای: "bg-blue-800/10 text-blue-600",
    تشریحی: "bg-orange-800/10 text-orange-600",
    تستی: "bg-cyan-800/10 text-cyan-600",
    "کوتاه پاسخ": "bg-pink-800/10 text-pink-600",
    "جای خالی": "bg-green-800/10 text-green-600",
  };

  return (
    <div
      dir="rtl"
      className="w-full overflow-hidden rounded-xl border border-gray-300"
    >
      <div className="w-full max-h-105 overflow-y-auto cursor-n-resize question-scroll">
        <table className="w-full border-collapse text-sm">
          {/* Header */}
          <thead className="sticky top-0 z-10 bg-violet-100">
            <tr className="h-11 border-b border-gray-300 text-gray-700">
              <th className="w-[34%] px-4 text-right font-medium">
                عنوان آزمون
              </th>

              <th className="w-[18%] text-center font-medium">کتاب / درس</th>

              <th className="w-[15%] text-center font-medium">نوع آزمون</th>

              <th className="w-[10%] text-center font-medium">وضعیت</th>

              <th className="w-[13%] text-center font-medium">تاریخ ایجاد</th>

              <th className="w-[10%] text-center font-medium">عملیات</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="overflow-auto">
            {exams.map((exam) => {
              const status = statusStyles[exam.statusColor];

              return (
                <tr
                  key={exam.id}
                  className="h-14 border-b border-gray-100 transition-colors hover:bg-gray-50/70"
                >
                  {/* Title */}
                  <td className="px-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`flex w-[76px] shrink-0 justify-center rounded-md py-1 text-[9px] font-bold ${typeStyles[exam.type]}`}
                      >
                        {exam.type}
                      </span>

                      <div className="w-60">
                        <span className="block truncate text-[11px] mr-5 font-medium text-gray-600">
                          {exam.title}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Lesson */}
                  <td className=" text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <BookOpen size={13} className="text-violet-500" />

                      <span className="text-[11px] w-25 text-gray-600">
                        {exam.lesson}
                      </span>
                    </div>

                    <span className="mt-1 pr-3 block text-[9px] text-gray-400">
                      {exam.grade}
                    </span>
                  </td>

                  {/* Type */}
                  <td className="text-center">
                    <span
                      className={`inline-flex rounded-md w-25 justify-center py-1 text-[9px] font-bold ${typeStyles[exam.type]}`}
                    >
                      {exam.type}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="">
                    <div className="flex items-center justify-center gap-1.5 mr-8">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${status.dot}`}
                      />

                      <span
                        className={`text-[10px] w-15 font-medium ${status.text}`}
                      >
                        {exam.status}
                      </span>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="text-center">
                    <div className="flex w-30 justify-self-end ml-5 gap-1.5">
                      <CalendarDays size={12} className="text-gray-400" />

                      <span className="text-[10px] text-gray-600">
                        {exam.date}
                      </span>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-1">
                    <div className="flex items-center justify-center gap-0.5">
                      <button
                        type="button"
                        title="مشاهده"
                        className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 transition hover:bg-blue-50 hover:text-blue-500"
                      >
                        <Eye size={14} />
                      </button>

                      <button
                        type="button"
                        title="ویرایش"
                        className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 transition hover:bg-yellow-50 hover:text-yellow-500"
                      >
                        <Pencil size={14} />
                      </button>

                      <button
                        type="button"
                        title="حذف"
                        className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 size={14} />
                      </button>

                      <button
                        type="button"
                        title="بیشتر"
                        className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                      >
                        <MoreVertical size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamsTable;
