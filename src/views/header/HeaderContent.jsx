import React from "react";
import SearchHeader from "../../components/header/SearchHeader";
import { Bell, MessageCircleMore, Moon } from "lucide-react";

function HeaderContent() {
  const visitMoreWebIcon = [
    {
      id: 1,
      icon: Bell,
    },
    {
      id: 2,
      icon: MessageCircleMore,
    },
    {
      id: 3,
      icon: Moon,
    },
  ];

  
  return (
    <div className="border-b border-gray-300 py-4 px-8 flex items-center justify-end ">
      <div className="flex items-center gap-6">
        {visitMoreWebIcon.map((visit) => {
          const Icon = visit.icon;

          return (
            <span key={visit.id}>
              <Icon
                size={32}
                className="p-2 transition-all duration-150 cursor-pointer rounded-full hover:bg-violet-100 hover:text-violet-900"
              />
            </span>
          );
        })}
      </div>
      <div className="px-50">
        <SearchHeader />
      </div>

      <div className="text-right">
        <p className="font-bold text-xl"> 👋 سلام علی اصغر نجفی </p>
        <p className="text-gray-400 pt-1">خوش آمدی به پنل کاربری آزمون یار</p>
      </div>
    </div>
  );
}

export default HeaderContent;
