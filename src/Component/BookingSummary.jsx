import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Confirmed", value: 82 },
  { name: "Pending", value: 13 },
  { name: "Cancelled", value: 5 },
];

const COLORS = [
  "#4f46e5",
  "#f59e0b",
  "#ec4899",
];

export default function BookingSummary() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm h-full">
      <h2 className="font-bold mb-5">
        Bookings Summary
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={60}
            outerRadius={90}
          >
            {data.map((item, i) => (
              <Cell
                key={i}
                fill={COLORS[i]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}