import {
  Plus,
  ListTodo,
  Clock3,
  CheckCircle2,
  Star,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen border-r border-white/10 bg-black/20 backdrop-blur-xl flex flex-col p-4">
      {/* Add Task */}
      <button className="h-14 border border-dashed border-white/20 rounded-xl text-white hover:border-purple-500/50 hover:bg-white/5 transition flex items-center justify-center gap-2 cursor-pointer">
        <Plus size={18} />
        Add Task
      </button>

      {/* Navigation */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <ul className="space-y-2">
          <li>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 text-white">
              <ListTodo size={18} />
              All Tasks
            </button>
          </li>

          <li>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition">
              <Clock3 size={18} />
              Pending
            </button>
          </li>

          <li>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition">
              <CheckCircle2 size={18} />
              Completed
            </button>
          </li>

          <li>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition">
              <Star size={18} />
              Important
            </button>
          </li>
        </ul>
      </div>

      {/* Bottom */}
      <div className="mt-auto pt-6 border-t border-white/10">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;