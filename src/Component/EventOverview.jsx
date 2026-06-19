import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";

const data = [
  { day: "18", value: 14 },
  { day: "19", value: 22 },
  { day: "20", value: 35 },
  { day: "21", value: 13 },
  { day: "22", value: 21 },
  { day: "23", value: 22 },
  { day: "24", value: 32 },
];

export default function EventOverview() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <h2 className="font-bold text-lg mb-4">Event Overview</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4f46e5"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
