import {
  BookOpen,
  ClipboardList,
  GraduationCap,
  HelpCircle,
} from "lucide-react";
import React from "react";

function RapidOperation() {
  const cards = [
    {
      id: 1,
      title: "افزودن کتاب",
      icon: BookOpen,
    },
    {
      id: 2,
      title: "افزودن درس",
      icon: GraduationCap,
    },
    {
      id: 3,
      title: "ایجاد سوال",
      icon: HelpCircle,
    },
    {
      id: 4,
      title: "ساخت آزمون",
      icon: ClipboardList,
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-5 px-2">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
            className="rounded-xl bg-violet-200/30 py-3.5 border border-gray-300 flex flex-col items-center justify-center gap-4 cursor-pointer hover:shadow-md transition "
          >
            <div className="relative">
              <Icon size={45} className="text-violet-500 " />
              <div
                className="absolute -right-3 -bottom-1 w-7 h-7 rounded-full bg-violet-600 text-white flex items-center justify-center text-lg font-bold"
              >
                +
              </div>

            </div>

            <p className="font-bold text-gray-700 text-sm">{card.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default RapidOperation;
