import {
  ClipboardList,
  CheckCircle2,
  Clock3,
  TrendingUp,
} from "lucide-react";

const StatsCard = ({ icon, title, value }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-400 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            {value}
          </h2>
        </div>

        <div className="text-purple-400">
          {icon}
        </div>
      </div>
    </div>
  );
};

const StatsGrid = ({
  totalTasks,
  completedTasks,
  pendingTasks,
  completionRate,
}) => {
  return (
    <div className="grid md:grid-cols-4 gap-4 mb-8">
      <StatsCard
        title="Total Tasks"
        value={totalTasks}
        icon={<ClipboardList size={24} />}
      />

      <StatsCard
        title="Completed"
        value={completedTasks}
        icon={<CheckCircle2 size={24} />}
      />

      <StatsCard
        title="Pending"
        value={pendingTasks}
        icon={<Clock3 size={24} />}
      />

      <StatsCard
        title="Completion"
        value={`${completionRate}%`}
        icon={<TrendingUp size={24} />}
      />
    </div>
  );
};

export default StatsGrid;