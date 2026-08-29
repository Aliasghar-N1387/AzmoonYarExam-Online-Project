import { ClipboardList, Folder, SavePlus } from "lucide-react";
import React from "react";

function Exams() {
  const BtnHeader = [
    {
      id: 1,
      name: "ساخت آزمون جدید",
      icon: <SavePlus size={16} />,
      styleButton:
        "bg-violet-900 text-white hover:bg-violet-800 hover:shadow-violet-500/30 active:bg-violet-950",
    },
    {
      id: 2,
      name: "بانک آزمون ها",
      icon: <Folder size={16} />,
      styleButton:
        "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md active:bg-gray-100",
    },
  ];

  return (
    <div>
      {/* Header  */}
      <div className="flex pl-10 justify-between text-right">
        <div className="flex gap-4">
          {BtnHeader.map((btn) => {
            return (
              <div key={btn.id}>
                <BtnContents
                  name={btn.name}
                  icon={btn.icon}
                  styleButton={btn.styleButton}
                  onClick={btn.onClick}
                />
              </div>
            );
          })}
        </div>

        <div className="flex gap-6">
          <div>
            <p className="text-2xl font-bold">آزمون ها</p>
            <p className="text-md"> . مدیريت و برگزارى آزمون های آموزشى</p>
          </div>
          <div className="flex justify-center items-center">
            <ClipboardList className="size-10 text-violet-700" />
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default Exams;
