import {
  BookOpen,
  ClipboardList,
  HelpCircle,
  BarChart3,
  GraduationCap,
  Activity,
  ArrowLeft,
} from "lucide-react";

function LatestActivities() {
    
  const activities = [
    {
      id: 1,
      title: "کتاب جدید ریاضی هفتم اضافه گردید",
      time: "۲ ساعت پیش",
      icon: BookOpen,
      iconStyle: "text-violet-500",
    },
    {
      id: 2,
      title: "آزمون «فصل دوم شیمی» ساخته شد",
      time: "۵ ساعت پیش",
      icon: ClipboardList,
      iconStyle: "text-violet-500",
    },
    {
      id: 3,
      title: "۱۲ سوال جدید به درس فیزیک اضافه شد",
      time: "دیروز",
      icon: HelpCircle,
      iconStyle: "text-violet-500",
    },
    {
      id: 4,
      title: "نتیجه آزمون «آزمون فصل ۱» منتشر شد",
      time: "دیروز",
      icon: BarChart3,
      iconStyle: "text-green-500",
    },
    {
      id: 5,
      title: "درس جدید «حرکت شناسی» ایجاد شد",
      time: "۲ روز پیش",
      icon: GraduationCap,
      iconStyle: "text-violet-500",
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-300 p-6 text-right " dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Activity className="text-violet-900 size-4" />
          <h2 className="font-bold text-gray-800 text-sm">آخرین فعالیت‌ها</h2>
        </div>
      </div>

      {/* List */}
      <div className="latest-scroll space-y-5 overflow-auto max-h-30">
        {activities.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex items-center justify-between group"
            >
              {/* Right */}

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center">
                  <Icon size={20} className={item.iconStyle} />
                </div>

                <p className="text-xs text-gray-700 font-medium pl-10">
                  {item.title}
                </p>
              </div>

              {/* Time */}
              <span
                className="text-xs text-gray-400 whitespace-nowrap pl-5">
                {item.time}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <button
        className="mt-7 flex items-center gap-2 text-violet-600 text-xs font-semibold hover:gap-5 cursor-pointer transition-all">
        مشاهده همه فعالیت‌ها
        <ArrowLeft size={15} />
      </button>
    </div>
  );
}

export default LatestActivities;
