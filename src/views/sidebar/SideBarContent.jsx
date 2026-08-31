import React from "react";
import logo from "../../assets/img/LogoApp.png";
import {
  Book,
  CircleQuestionMark,
  ClipboardClock,
  ClipboardList,
  ClipboardPlus,
  GraduationCap,
  Home,
  LibraryBig,
  ChevronRight,
  LogOut,
  WavesArrowDown,
  Crown,
  Settings,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router";

import bgsidebar from "../../assets/img/sidebar-img.png";

function SideBarContent({ collapsed, setCollapsed }) {
  const menuItemSidebar = [
    {
      id: 1,
      name: "داشبورد",
      iconMenu: <Home size={16} />,
      router: "/",
    },
    {
      id: 2,
      name: "کتاب ها",
      iconMenu: <LibraryBig size={16} />,
      router: "books",
    },
    {
      id: 3,
      name: "سوالات",
      iconMenu: <CircleQuestionMark size={16} />,
      router: "questions",
    },
    {
      id: 4,
      name: "آزمون ها",
      iconMenu: <ClipboardList size={16} />,
      router: "exams",
    },
    {
      id: 5,
      name: "ایجاد آزمون",
      iconMenu: <ClipboardPlus size={16} />,
      router: "create-exam",
    },
    {
      id: 6,
      name: "دانلود ها",
      iconMenu: <WavesArrowDown size={16} />,
      router: "create-exam",
    },
    {
      id: 7,
      name: "اشتراک",
      iconMenu: <Crown size={16} />,
      router: "create-exam",
    },
    {
      id: 8,
      name: "تنظیمات",
      iconMenu: <Settings size={16} />,
      router: "create-exam",
    },
    {
      id: 9,
      name: "راهنما",
      iconMenu: <CircleQuestionMark size={16} />,
      router: "create-exam",
    },
  ];

  const location = useLocation();
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const navigate = useNavigate();

  return (
    <div
      className="flex h-full flex-col bg-cover bg-center bg-no-repeat px-3 py-4 transition-all duration-300"
      dir="rtl"
      style={{
        backgroundImage: `url(${bgsidebar})`,
      }}
    >
      {/* Header Sidebar */}
      <div className="flex justify-center py-2 mb-4 text-right">
        {!collapsed && (
          <div className="mt-4">
            <h1 className="font-[Vazir] text-violet-900 text-xl font-extrabold">
              آزمون یار
            </h1>

            <p className="font-[Vazir] text-violet-700 text-sm font-bold">
              AzmoonYar
            </p>
          </div>
        )}
        <div
          className="w-20 h-18 bg-violet-900"
          style={{
            WebkitMaskImage: `url(${logo})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "contain",
            maskImage: `url(${logo})`,
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "contain",
          }}
        ></div>
      </div>

      {/* Content SideBar */}
      <div className="">
        <ul>
          {menuItemSidebar.map((menu) => {
            const isActive =
              menu.router === "/"
                ? location.pathname === "/"
                : location.pathname === `/${menu.router}`;
            return (
              <li
                key={menu.id}
                onClick={() => navigate(menu.router)}
                className={`flex transition-all duration-250 cursor-pointer group items-center rounded-lg py-1.5 px-1 mt-4 ${isActive ? "bg-violet-900" : "bg-violet-100/90 hover:bg-violet-900"} ${collapsed ? "justify-center" : "gap-3"}`}
              >
                <span
                  className={`p-1 rounded-lg transition-all duration-300 ${isActive ? "bg-gray-100 text-violet-900 shadow-sm shadow-gray-300" : "text-violet-900 group-hover:bg-gray-100 group-hover:shadow-sm group-hover:shadow-violet-200"}`}
                >
                  <span className="block transition-transform duration-300 group-hover:scale-110">
                    {menu.iconMenu}
                  </span>
                </span>
                {!collapsed && (
                  <span
                    className={`font-bold text-sm ${isActive ? "text-white" : "text-violet-900 group-hover:text-white"}`}
                  >
                    {menu.name}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer SideBar */}
      <div className="mt-auto">
        {/* Exit Button */}
        <button
          className={`flex w-full py-2.5 pt-3 px-2 cursor-pointer ${
            collapsed ? "justify-center" : "gap-3"
          }`}
        >
          <LogOut
            size={18}
            className="transition-transform text-rose-700 duration-300"
          />

          {!collapsed && (
            <span className="mr-2 font-bold text-sm text-rose-700">خروج</span>
          )}
        </button>

        {/* Collapse Button */}
        <button
          onClick={toggleCollapse}
          className={`flex w-full py-2.5 pt-3 px-2 border-t border-gray-300 cursor-pointer ${
            collapsed ? "justify-center" : "gap-3"
          }`}
        >
          <span
            className={`${
              collapsed ? "rotate-180" : ""
            } transition-all duration-500`}
          >
            <ChevronRight
              size={18}
              strokeWidth={3}
              className="text-violet-900"
            />
          </span>

          {!collapsed && (
            <span className="mr-2 font-bold text-sm text-violet-900">بستن</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default SideBarContent;
