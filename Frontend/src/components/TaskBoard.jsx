import TaskCard from "./TaskCard";
import { LayoutGrid,StretchHorizontal } from "lucide-react";
const TaskBoard = ({ tasks }) => {
  return (
    <>
    <div className="w-full flex justify-between items-center text-gray-200 p-2">
      <div className=" border border-white/10 bg-black/20 backdrop-blur-xl flex rounded-lg">
        <div className="px-4 py-2 rounded-l-lg bg-black/20">
          Sort By
        </div>
        <select className="text-gray-400 px-2 pr-5">
          <option value="Latest">Latest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>

      <div className="flex justify-center items-center border border-white/10 bg-black/20 backdrop-blur-xl rounded-md gap-1 p-1">
        <div className="bg-black/20 p-1.5 rounded-md">
          <LayoutGrid size={15} />
        </div>
        <div className="">
          <StretchHorizontal  size={15}  />
        </div>
      </div>
    </div>
        <div className="grid grid-cols-3 gap-6 p-2">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
        />
      ))}
    </div>
    </>
  );
};

export default TaskBoard;