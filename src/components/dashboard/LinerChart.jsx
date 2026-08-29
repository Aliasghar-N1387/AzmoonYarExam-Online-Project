import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "فعالیت‌ها",
    data: [
      { x: "بهمن", y: 220 },
      { x: "اسفند", y: 450 },
      { x: "فروردین", y: 700 },
      { x: "اردیبهشت", y: 780 },
      { x: "خرداد", y: 650 },
      { x: "تیر", y: 950 },
      { x: "مرداد", y: 1025 },
    ],
  },
];

export default function LinerChart() {
  return (
    <div className="h-70 w-120">
       <ResponsiveLine
        data={data}
        curve="monotoneX"
        enableArea={true}
        areaOpacity={0.15}
        enablePoints={true}
        pointSize={8}
        colors={["#6D28D9"]}
        enableGridX={false}
        enableGridY={true}
        animate={true}
        motionConfig="gentle"
        margin={{
          top: 30,
          right: 30,
          bottom: 50,
          left: 50,
        }}
        theme={{
          text: {
            fontFamily: "Vazir",
            fontSize: 10,
            fill: "#374151",
          },
          axis: {
            ticks: {
              text: {
                fontFamily: "Vazir",
                fontSize: 10,
                fill: "#6B7280",
              },
            },
          },
          tooltip: {
            container: {
              fontFamily: "Vazir",
              fontSize: 10,
            },
          },
          legends: {
            text: {
              fontFamily: "Vazir",
            },
          },
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: 1250,
        }}
        axisLeft={{
          tickValues: [0, 250, 500, 750, 1000, 1250],
        }}
      />
    </div>
  );
}
