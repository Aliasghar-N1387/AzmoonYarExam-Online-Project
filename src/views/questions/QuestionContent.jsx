import { CirclePlus, CircleQuestionMark, Folder } from "lucide-react";
import BtnContents from "../../components/custom/BtnContents";
import FilterQuestion from "../../components/questions/FilterQuestion";
import SearchQuestion from "../../components/questions/SearchQuestion";
import CardinfoQuestions from "../../components/questions/CardinfoQuestions";
import QuestionTable from "../../components/questions/QuestionsTable";

function QuestionContent() {
  const BtnHeader = [
    {
      id: 1,
      name: "سوال جدید",
      icon: <CirclePlus size={16} />,
      styleButton:
        "bg-violet-900 text-white hover:bg-violet-800 hover:shadow-violet-500/30 active:bg-violet-950",
    },
    {
      id: 2,
      name: "دسته بندی ها",
      icon: <Folder size={16} />,
      styleButton:
        "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md active:bg-gray-100",
    },
  ];

  return (
    <div className="p-6 h-full pb-0 bg-violet-50/50">
      {/* Headre */}
      <div className="flex pl-10 justify-between text-right">
        <div className="flex justify-center items-center gap-4">
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
            <p className="text-2xl font-bold">سوال ها</p>
            <p className="text-md">
              مدیریت و سازماندهی سوالات بر اساس كتاب، درس و نوع سوال
            </p>
          </div>
          <div className="flex justify-center items-center">
            <CircleQuestionMark className="size-10 text-violet-700" />
          </div>
          <div className=""></div>
        </div>

      </div>

      {/*    Content    */}
      {/* Filter & Search Books  */}
      <div className="my-10 flex justify-center items-end gap-14">
        <FilterQuestion />
        <SearchQuestion />
      </div>

       <div>
        <CardinfoQuestions/>
       </div>
       <div className="mt-7 flex justify-center">
        <QuestionTable/>
       </div>
    </div>
  );
}

export default QuestionContent;
