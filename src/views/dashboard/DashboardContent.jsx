import React, { useEffect, useState } from "react";

import CardInformation from "../../components/dashboard/CardInformation";
import LinerChart from "../../components/dashboard/LinerChart";
import DonutChart from "../../components/dashboard/DonutChart";
import DropDown from "../../components/custom/DropDown";
import RapidOperation from "../../components/dashboard/RapidOperation";
import LatestActivities from "../../components/dashboard/LatestActivities";
import LatestExams from "../../components/dashboard/LatestExams";
import CalendarDate from "../../components/custom/CalenderDate";

import { ActivityIcon, ChartPie, Zap } from "lucide-react";
import dashboardCrud from "../../api/dashboardCrud";

function DashboardContent() {

  const setData = useState(null);

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const response = await dashboardCrud.getData();
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getDashboardData();
  }, []);

  return (
    <div className="p-6 h-full pb-0 bg-violet-50/50">
      <div>
        <CardInformation />
      </div>

      <div className="mt-5 flex gap-10 justify-center items-center">
        {/* Rapid Card */}
        <div className="relative px-15 py-2 rounded-lg border border-gray-300 text-right w-full">
          <p className="flex justify-end gap-3 text-sm font-bold my-2.5">
            عملیات سریع
            <Zap className="size-4 text-violet-900" />
          </p>

          <div>
            <RapidOperation />
          </div>
        </div>

        {/* Linear Chart */}
        <div className="relative rounded-lg border border-gray-300">
          <div className="absolute top-2 right-10 flex justify-between">
            <p className="flex items-center gap-3 text-sm font-bold mt-2.5">
              روند فعالیت
              <ActivityIcon className="size-4 text-violet-900" />
            </p>

            <div className="w-30 absolute right-75">
              <DropDown placeholder="ماه گذشته" />
            </div>
          </div>

          <div className="mt-10">
            <LinerChart />
          </div>
        </div>

        {/* Donut Chart */}
        <div className="relative rounded-lg border border-gray-300">
          <p className="absolute top-2 right-10 flex items-center gap-3 text-sm font-bold mt-2.5">
            سوالات براساس نوع
            <ChartPie className="size-4 text-violet-900" />
          </p>

          <div className="mt-10">
            <DonutChart />
          </div>
        </div>
      </div>

      <div className="mt-5 flex gap-10 justify-center items-center">
        <div>
          <LatestActivities />
        </div>

        <div>
          <LatestExams />
        </div>

        <div>
          <CalendarDate />
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
