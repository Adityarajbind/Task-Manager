import {
  Plus,
  ListTodo,
  Clock3,
  CheckCircle2,
  Star,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({
  onAddTask,
  activeFilter,
  setActiveFilter,
  onlogout,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const navigate = useNavigate();

  return (
    <>
      {sidebarOpen && (
        <div
          className="
        fixed inset-0
        bg-black/50
        backdrop-blur-sm
        z-40
        lg:hidden
      "
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <aside
        className={` fixed lg:relative top-0 left-0 z-50 h-full w-64 border-r border-white/10 bg-black/20 backdrop-blur-md flex flex-col p-4 rounded-l-xl transition-transform duration-300 ${sidebarOpen ? "translate-x-0 bg-black/80 " : "-translate-x-[110%] "} lg:translate-x-0
  `}
      >
        {/* Add Task */}
        <button
          className="h-14 border border-dashed border-white/20 rounded-xl text-white hover:border-purple-500/50 hover:bg-white/5 transition flex items-center justify-center gap-2 cursor-pointer"
          onClick={onAddTask}
        >
          <Plus size={18} />
          Add Task
        </button>

        {/* Navigation */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveFilter("all")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl ${activeFilter === "all" ? "bg-white/5 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"} transition`}
              >
                <ListTodo size={18} />
                All Tasks
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveFilter("pending")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeFilter === "pending" ? "bg-white/5 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"} `}
              >
                <Clock3 size={18} />
                Pending
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveFilter("completed")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeFilter === "completed" ? "bg-white/5 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"} `}
              >
                <CheckCircle2 size={18} />
                Completed
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveFilter("important")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeFilter === "important" ? "bg-white/5 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"} `}
              >
                <Star size={18} />
                Important
              </button>
            </li>
          </ul>
        </div>

        {/* Bottom */}
        <div className="mt-auto pt-6 border-t border-white/10">
          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition"
            onClick={() => {
              onlogout();
              navigate("/login");
            }}
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
