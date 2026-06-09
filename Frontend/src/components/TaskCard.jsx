import { Clock3, CheckCircle2, Pencil, Trash2, Star } from "lucide-react";
import { useState } from "react";

const TaskCard = ({ task, onEdit, onDelete, onToggleStatus, HandleStared }) => {
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
          <h3 className="text-lg max-max-md:text-sm font-semibold text-white">{task.title}</h3>

          <div className="mt-2">
            <p
              className={`text-sm max-max-md:text-xs text-gray-400 ${
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
          className={`h-10 w-10 max-md:h-7 max-md:w-7  cursor-pointer rounded-xl max-md:rounded-md bg-white/5 hover:bg-white/10 text-gray-400 flex items-center justify-center ${
            task.isImportant ? "text-yellow-400" : "text-gray-400"
          }`}
        >
          {task.isImportant ? (
            <Star size={16} fill="currentColor" />
          ) : (
            <Star size={16} />
          )}
        </button>
      </div>

      <div>
        {/* Footer */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => onToggleStatus(task)}
            className={`px-3 py-2 rounded-xl text-sm max-md:text-xs max-md:rounded-sm max-md:px-1.5 max-md:py-1 flex cursor-pointer items-center gap-2 ${
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
              onClick={() => {
                onEdit(task);
              }}
              className="h-10 w-10 rounded-xl max-md:h-7 max-md:w-7 max-md:rounded-md bg-white/5 hover:bg-white/10 text-blue-400 flex items-center justify-center cursor-pointer"
            >
              <Pencil size={16} />
            </button>

            <button
              onClick={() => onDelete(task._id)}
              className="h-10 w-10 rounded-xl max-md:h-7 max-md:w-7 max-md:rounded-md bg-white/5 hover:bg-white/10 text-red-400 flex items-center justify-center cursor-pointer"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        {/* Bottom timestamp */}
        <div className="mt-4 max-md:mt-2 pt-4 max-md:pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-gray-500">
          <Clock3 size={14} />
          Created at {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
