import { Search, User2 } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <header className=" border-b border-white/10 backdrop-blur-xl bg-black/20">
      <div className="w-full mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-white">ALL TASKS</h1>
        </div>

        {/* Search */}
        <div className="flex  gap-2 self-end items-center justify-end">
          <div className="relative ">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search tasks..."
              className=" h-10 rounded-lg bg-white/5 border border-white/10 pl-11 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/50"
            />
          </div>
          <div className="User">
            <div className="h-10 px-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-gray-300">
              <User2 size={18} />
              <span>UserName</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
