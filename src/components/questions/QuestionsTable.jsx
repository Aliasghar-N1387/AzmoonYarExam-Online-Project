import {
  MoreVertical,
  FileText,
  Pencil,
  Trash2,
  SquarePen,
} from "lucide-react";

const QuestionTable = () => {
  const questions = [
    {
      id: 1,
      title: "قانون دوم نیوتن را توضیح دهید و یک مثال عددی حل کنید.",
      type: "تشریحی",
      lesson: "فیزیک ۳ - فصل ۲",
      difficulty: "متوسط",
      difficultyColor: "orange",
      time: "۷ دقیقه",
      date: "۱۴۰۳/۰۶/۱۴",
    },
    {
      id: 2,
      title:
        "در شکل زیر اگر نیروی خالص وارد بر جسم صفر باشد، شتاب جسم چقدر است؟",
      type: "تستی",
      lesson: "فیزیک ۳ - فصل ۲",
      difficulty: "آسان",
      difficultyColor: "green",
      time: "۱ دقیقه",
      date: "۱۴۰۳/۰۶/۱۳",
    },
    {
      id: 3,
      title:
        "جای خالی را در جمله زیر کامل کنید: نیروی ... باعث تغییر سرعت جسم می‌شود.",
      type: "جای خالی",
      lesson: "فیزیک ۳ - فصل ۱",
      difficulty: "آسان",
      difficultyColor: "green",
      time: "۱ دقیقه",
      date: "۱۴۰۳/۰۶/۱۳",
    },
    {
      id: 4,
      title: "کدام گزینه در مورد قانون پایستگی انرژی صحیح است؟",
      type: "تستی",
      lesson: "فیزیک ۳ - فصل ۳",
      difficulty: "سخت",
      difficultyColor: "red",
      time: "۲ دقیقه",
      date: "۱۴۰۳/۰۶/۱۲",
    },
    {
      id: 5,
      title: "تعریف تکانه را بنویسید و یک مثال کاربردی بیان کنید.",
      type: "کوتاه پاسخ",
      lesson: "فیزیک ۳ - فصل ۲",
      difficulty: "متوسط",
      difficultyColor: "orange",
      time: "۳ دقیقه",
      date: "۱۴۰۳/۰۶/۱۲",
    },
    {
      id: 6,
      title: "درستی یا نادرستی عبارت زیر را مشخص کنید.",
      type: "صحیح / غلط",
      lesson: "فیزیک ۳ - فصل ۱",
      difficulty: "آسان",
      difficultyColor: "green",
      time: "۱ دقیقه",
      date: "۱۴۰۳/۰۶/۱۱",
    },
    {
      id: 7,
      title: "اجزای نمودار مکان - زمان در حرکت یکنواخت را نام ببرید.",
      type: "وصل کردنی",
      lesson: "فیزیک ۳ - فصل ۱",
      difficulty: "متوسط",
      difficultyColor: "orange",
      time: "۲ دقیقه",
      date: "۱۴۰۳/۰۶/۱۰",
    },
    {
      id: 7,
      title: "اجزای نمودار مکان - زمان در حرکت یکنواخت را نام ببرید.",
      type: "وصل کردنی",
      lesson: "فیزیک ۳ - فصل ۱",
      difficulty: "متوسط",
      difficultyColor: "orange",
      time: "۲ دقیقه",
      date: "۱۴۰۳/۰۶/۱۰",
    },
    {
      id: 7,
      title: "اجزای نمودار مکان - زمان در حرکت یکنواخت را نام ببرید.",
      type: "وصل کردنی",
      lesson: "فیزیک ۳ - فصل ۱",
      difficulty: "متوسط",
      difficultyColor: "orange",
      time: "۲ دقیقه",
      date: "۱۴۰۳/۰۶/۱۰",
    },
  ];

  const difficultyStyles = {
    green: {
      dot: "bg-green-500",
      text: "text-gray-600",
    },
    orange: {
      dot: "bg-orange-400",
      text: "text-gray-600",
    },
    red: {
      dot: "bg-red-500",
      text: "text-gray-600",
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
      {/* Table wrapper */}
      <div className="w-full max-h-105 overflow-y-auto overflow-x-auto cursor-n-resize question-scroll">
        <table className="w-full border-collapse text-sm">
          {/* Header */}
          <thead className="sticky top-0 z-10 bg-violet-100">
            <tr className="h-12 border-b border-gray-300 text-gray-700">
              <th className="w-[30%] px-5 text-right font-medium">
                عنوان سوال
              </th>

              <th className="w-[10%] text-center font-medium">کتاب / درس</th>

              <th className="w-[10%] text-center font-medium">سختی</th>

              <th className="w-[10%] text-center font-medium">تاریخ ایجاد</th>

              <th className="w-[6%] text-center font-medium">عملیات</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="">
            {questions.map((question) => {
              const difficulty = difficultyStyles[question.difficultyColor];
              return (
                <tr
                  key={question.id}
                  className="h-16 border-b border-gray-100 transition-colors hover:bg-gray-50/70"
                >
                  {/* Question */}
                  <td className="px-5">
                    <div className="flex items-center gap-2">
                      {/* Type Badge */}
                      <span
                        className={`shrink-0 w-20 ml-3 flex justify-center rounded-md py-1 text-xs font-bold ${
                          typeStyles[question.type] ||
                          "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {question.type}
                      </span>

                      <div className="group relative max-w-100">
                        <span className="block truncate text-[12px] text-gray-600">
                          {question.title}
                        </span>

                        {/* Tooltip */}
                        <div
                          className="pointer-events-none absolute right-0 top-full z-50 mt-3 w-[360px] rounded-xl border border-violet-100 bg-white p-4 text-right opacity-0 invisible shadow-[0_10px_35px_rgba(0,0,0,0.12)] translate-y-1 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
    "
                        >
                          <div className="mb-2 flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-100">
                              <FileText size={14} className="text-violet-600" />
                            </div>

                            <span className="text-xs font-bold text-violet-700">
                              متن کامل سوال
                            </span>
                          </div>

                          <p className="text-[12px] font-medium leading-6 text-gray-600">
                            {question.title}
                          </p>

                          <div
                            className="absolute -top-1.5 right-6 h-3 w-3 rotate-45 border-l border-t border-violet-100 bg-white
      "
                          />
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* book / lessone */}
                  <td className="text-center">
                    <span className="text-[12px] text-gray-600">
                      {question.lesson}
                    </span>
                  </td>

                  {/* Type Exam */}
                  <td className="px-4">
                    <div className="flex items-center justify-center gap-1.5">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${difficulty.dot}`}
                      />

                      <span className="text-[12px] text-gray-600">
                        {question.difficulty}
                      </span>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="px-4 text-center">
                    <span className="text-[12px] text-gray-600">
                      {question.date}
                    </span>
                  </td>

                  {/* Crud */}
                  <td className="px-3">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        type="button"
                        title="بیشتر"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                      >
                        <MoreVertical size={16} />
                      </button>

                      <button
                        type="button"
                        title="مشاهده"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition hover:bg-blue-50 hover:text-blue-500"
                      >
                        <FileText size={16} />
                      </button>

                      <button
                        type="button"
                        title="ویرایش"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition hover:bg-yellow-200/20 hover:text-yellow-500"
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        type="button"
                        title="حذف"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 size={16} />
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

export default QuestionTable;
