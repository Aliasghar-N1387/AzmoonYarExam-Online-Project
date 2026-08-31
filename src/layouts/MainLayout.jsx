import React from "react";
import SideBarContent from "../views/sidebar/SideBarContent";
import HeaderContent from "../views/header/HeaderContent";
import { useState } from "react";
import { Outlet } from "react-router";

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarClasses = collapsed ? "w-[70px]" : "w-[240px]";
  const contentClasses = collapsed ? "mr-[70px]" : "mr-[240px]";

  return (
    <div className="min-h-screen bg-gray-50">
      <aside
        className={`fixed top-0 right-0 h-screen z-50 border-l border-gray-300 bg-white shadow-sm transition-all duration-300 ${sidebarClasses}`}
      >
        <SideBarContent collapsed={collapsed} setCollapsed={setCollapsed} />
      </aside>

      <div className={`transition-all duration-300 ${contentClasses}`}>
        <header className={`fixed w-full top-0 right-0 h-16 z-40 bg-white transition-all duration-300 ${contentClasses}`}>
          <HeaderContent />
        </header>

        <section className="pt-20 pb-6 min-h-screen overflow-y-auto">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default MainLayout;