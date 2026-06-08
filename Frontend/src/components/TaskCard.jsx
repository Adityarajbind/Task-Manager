import { Clock3, CheckCircle2, Pencil, Trash2, Star } from "lucide-react";
import { useState } from "react";

const TaskCard = ({ task, onEdit, onDelete, onToggleStatus,HandleStared }) => {
  const createdDate = new Date(task.createdAt);
  const [expanded, setExpanded] = useState(false);
  const formattedDate = createdDate.toLocaleDateString();

  const formattedTime = createdDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="group rounded-xl border border-white/10 bg-black/20 backdrop-blur-xl p-2 hover:border-purple-500/30  transition-all flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <h3 className="text-lg font-semibold text-white">{task.title}</h3>

          <div className="mt-2">
            <p
              className={`text-sm text-gray-400 ${
                expanded ? "" : "line-clamp-2"
              }`}
            >
              {task.description}
            </p>

            {task.description?.length > 80 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-xs text-purple-400 mt-1 hover:text-purple-300"
              >
                {expanded ? "Show Less" : "Read More"}
              </button>
            )}
          </div>
        </div>

        <button
          onClick={() => HandleStared(task)}
          className="h-10 w-10 p-3 cursor-pointer rounded-xl bg-white/5 hover:bg-white/10 text-yellow-400 flex items-center justify-center"
        >
          <Star size={16} /> 
        </button>
      </div>

      <div>
        {/* Footer */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => onToggleStatus(task._id)}
            className={`px-3 py-2 rounded-xl text-sm flex items-center gap-2 ${
              task.status === "completed"
                ? "bg-green-500/20 text-green-400"
                : "bg-yellow-500/20 text-yellow-400"
            }`}
          >
            <CheckCircle2 size={16} />
            {task.status}
          </button>

          <div className="flex gap-2">
            <button
              onClick={() => onEdit(task)}
              className="h-10 w-10 rounded-xl bg-white/5 hover:bg-white/10 text-blue-400 flex items-center justify-center"
            >
              <Pencil size={16} />
            </button>

            <button
              onClick={() => onDelete(task._id)}
              className="h-10 w-10 rounded-xl bg-white/5 hover:bg-white/10 text-red-400 flex items-center justify-center"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        {/* Bottom timestamp */}
        <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-gray-500">
          <Clock3 size={14} />
          Created at {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
