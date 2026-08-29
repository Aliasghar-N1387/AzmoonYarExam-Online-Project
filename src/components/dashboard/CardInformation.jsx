import {
  BookOpen,
  CircleQuestionMark,
  ClipboardList,
  GraduationCap,
} from "lucide-react";
import React, { useEffect, useState } from "react";

function CardInformation() {
  const Cardinfo = [
    {
      id: 1,
      name: "سوالات",
      increse: "+ 50%",
      titrIncrese: "نسبت به ماه گذشته",
      icon: (
        <CircleQuestionMark className="bg-violet-800/30 text-violet-700 rounded-2xl p-3 size-13" />
      ),
      count: 6456,
    },
    {
      id: 2,
      name: "کتاب ها",
      increse: "+ 81%",
      titrIncrese: "نسبت به ماه گذشته",
      icon: (
        <BookOpen className="bg-yellow-300/30 text-yellow-500 rounded-2xl p-3 size-13" />
      ),
      count: 24,
    },
    {
      id: 3,
      name: "آزمون ها",
      increse: "+ 5%",
      titrIncrese: "نسبت به ماه گذشته",
      icon: (
        <ClipboardList className="bg-green-400/30 text-green-600 rounded-2xl p-3 size-13" />
      ),
      count: 32,
    },
    {
      id: 4,
      name: "دروس",
      increse: "+ 60%",
      titrIncrese: "نسبت به ماه گذشته",
      icon: (
        <GraduationCap className="bg-gray-800/30 text-gray-600 rounded-2xl p-3 size-13" />
      ),
      count: 15,
    },
  ];


  ///Animate Number to Start - End
  const [counts, setCounts] = useState(Cardinfo.map(() => 0));
  useEffect(() => {
    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts(Cardinfo.map((card) => Math.floor(card.count * easeOut)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="text-right flex justify-center gap-10">
      {Cardinfo.map((card, index) => {
        return (
          <div
            className="flex rounded-lg border border-gray-300 shadow-gray-800/30"
            key={card.id}
          >
            <div className="flex items-center justify-center pl-5 py-10">
              <span>{card.icon}</span>
            </div>

            <div className="w-full pr-5 py-5 px-10">
              <p className="font-bold text-lg">{card.name}</p>

              <p className="font-bold text-3xl">
                {counts[index].toLocaleString("fa-IR")}
              </p>

              <span className="flex pt-1 gap-2 items-end justify-end font-bold text-xs">
                <span className="text-gray-400">{card.titrIncrese}</span>

                <p className="font-bold text-green-600 text-sm">
                  {card.increse}
                </p>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardInformation;
