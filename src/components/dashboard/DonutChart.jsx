import { ResponsivePie } from "@nivo/pie";

const chartData = [
  {
    id: "تستی",
    label: "تستی",
    value: 1498,
    color: "#6D28D9",
  },
  {
    id: "تشریحی",
    label: "تشریحی",
    value: 394,
    color: "#34D399",
  },
  {
    id: "کوتاه پاسخ",
    label: "کوتاه پاسخ",
    value: 197,
    color: "#F59E0B",
  },
  {
    id: "جای خالی",
    label: "جای خالی",
    value: 148,
    color: "#EC4899",
  },
  {
    id: "صحیح/غلط",
    label: "صحیح/غلط",
    value: 123,
    color: "#FBBF24",
  },
  {
    id: "وصل کردنی",
    label: "وصل کردنی",
    value: 96,
    color: "#38BDF8",
  },
];

function QuestionTypeChart() {
  return (
    <div className="flex items-center justify-between gap-8">
      {/* Chart */}
      <div className="h-70 p-10 w-70">
        <ResponsivePie
          data={chartData}
          innerRadius={0.65}
          padAngle={1}
          cornerRadius={3}
          colors={(item) => item.data.color}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          animate={true}
        />
      </div>

      {/* Legend */}
      <div className="flex mr-10 flex-col gap-2">
        {chartData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-6"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <span className="text-sm text-gray-600">{item.label}</span>
            </div>

            <span className="text-xs font-[Vazir] font-bold text-gray-500">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionTypeChart;
