import { Search, User2, MenuIcon } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = ({ searchTerm, setSearchTerm, setSidebarOpen }) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <header className=" border-b border-white/10 backdrop-blur-xl bg-black/20">
      <div className="w-full mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex gap-2 justify-center items-center">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden invert-100">
            <MenuIcon size={25} />
          </button>
          <div>
            <h1 className="text-2xl max-sm:text-[16px] font-bold text-white">ALL TASKS</h1>
          </div>
        </div>

        {/* Search */}
        <div className="flex  gap-2 self-end items-center justify-end">
          <div className="relative max-sm:hidden  ">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search tasks..."
              className=" h-10 rounded-lg bg-white/5 border border-white/10 pl-11 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/50"
            />
          </div>
          <div className="User">
            <div className="h-10 px-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-gray-300">
              <User2 size={18} />
              <span>{user.name}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
