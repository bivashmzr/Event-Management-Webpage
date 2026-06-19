export default function StatCard({
  title,
  value,
  growth,
  icon,
}) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm">
      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xl">
        {icon}
      </div>

      <h4 className="text-gray-500 mt-4">{title}</h4>

      <h2 className="text-3xl font-bold mt-1">
        {value}
      </h2>

      <p className="text-green-500 mt-2">
        ↑ {growth} from last month
      </p>
    </div>
  );
}
