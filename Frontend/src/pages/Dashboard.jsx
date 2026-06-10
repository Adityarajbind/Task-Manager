import React from "react";
import { LayoutGrid, Plus, StretchHorizontal } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import API from "../services/taskService";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskBoard from "../components/TaskBoard";
import TaskModal from "../components/TaskModal";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [Layout, setLayout] = useState("grid3");
  const [sortOrder, setSortOrder] = useState("latest");
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await API.get("/");

      setTasks(res.data);
    } catch (error) {
      console.error(error);
    } finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  // filtering the task according to activefilter
  const filteredTasks = tasks.filter((task) => {
    switch (activeFilter) {
      case "pending":
        return task.status === "pending";

      case "completed":
        return task.status === "completed";

      case "important":
        return task.isImportant;

      default:
        return true;
    }
  });
  // searching if there is a searchterm in searchbar
  const searchedTasks = filteredTasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  // sorting the task according to sortOrder
  const displayedTasks = [...searchedTasks].sort((a, b) => {
    if (sortOrder === "latest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }

    return new Date(a.createdAt) - new Date(b.createdAt);
  });

  const handleTaskSubmit = async (taskData) => {
    setLoading(true)
    try {
      if (editingTask) {
        const res = await API.put(`/${editingTask._id}`, taskData);

        setTasks((prev) =>
          prev.map((task) => (task._id === editingTask._id ? res.data : task)),
        );
      } else {
        const res = await API.post("/", taskData);

        setTasks((prev) => [res.data, ...prev]);
      }

      setShowModal(false);
      setEditingTask(null);
    } catch (err) {
      console.log(err);
    }finally{
      setLoading(false)
    }
  };
  const handleCreateClick = () => {
    setEditingTask(null);
    setShowModal(true);
  };
  const handleEditClick = (task) => {
    setEditingTask(task);
    setShowModal(true);
  };
  const handleDeleteTask = async (taskId) => {
    try {
      await API.delete(`/${taskId}`);

      setTasks((prev) => prev.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error(error);
    }
  };
  const handleToggleStatus = async (task) => {
    try {
      const res = await API.patch(`/${task._id}/status`);
      setTasks((prev) => prev.map((t) => (t._id === task._id ? res.data : t)));
    } catch (error) {
      console.log(error);
    }
  };
  const handleToggleImportant = async (task) => {
    try {
      const res = await API.patch(`/${task._id}/isImportant`);
      setTasks((prev) => prev.map((t) => (t._id === task._id ? res.data : t)));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="">
        <Background />
      </div>
      <TaskModal
        open={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingTask(null);
        }}
        editingTask={editingTask}
        onSubmit={handleTaskSubmit}
        loading = {loading}
      />
      <div className="relative z-10 min-h-screen w-full p-4 max-[425px]:p-0">
        <div className="relative w-full h-full rounded-xl border-2 border-white/10 bg-white/4 backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.4)] flex">
          <div className="SideBar ">
            <Sidebar
              onAddTask={handleCreateClick}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              onlogout={logout}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          </div>
          <div className="Main-Content w-full ">
            <Navbar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setSidebarOpen={setSidebarOpen}
            />
            <div className="w-full flex justify-between items-center text-gray-200 p-2">
              <div className=" border border-white/10 bg-black/20 backdrop-blur-xl flex rounded-lg">
                <div className="px-4 py-2 max-sm:hidden rounded-l-lg bg-black/20">
                  Sort By
                </div>
                <select
                  className="text-gray-400 px-2 pr-5 max-sm:px-1 max-sm:py-2 max-sm:pr-1 outline-none cursor-pointer"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="latest" className="bg-gray-600">
                    Latest
                  </option>
                  <option value="oldest" className="bg-gray-600">
                    Oldest
                  </option>
                </select>
              </div>

              <div className=" flex gap-2">
                <div className="flex justify-center items-center border border-white/10 bg-black/20 backdrop-blur-xl rounded-md max-[375px]:hidden p-1">
                  <button
                    className={`p-1.5 max-sm:hidden ${Layout === "grid3" ? "bg-black rounded-md" : "cursor-pointer"}`}
                    onClick={() => setLayout("grid3")}
                  >
                    <img src="/grid-3x3.svg" className="w-3 h-3 invert-100" />
                  </button>
                  <button
                    className={`p-1.5 ${Layout === "grid2" ? "bg-black rounded-md" : "cursor-pointer"}`}
                    onClick={() => setLayout("grid2")}
                  >
                    <LayoutGrid size={15} />
                  </button>
                  {/* layout gird 1 col */}
                  <button
                    className={`p-1.5 sm:hidden ${Layout === "grid3" ? "bg-black rounded-md" : "cursor-pointer"}`}
                    onClick={() => setLayout("grid3")}
                  >
                    <StretchHorizontal size={15} />
                  </button>
                </div>
                <button
                  className="cursor-pointer flex justify-center items-center gap-2 border border-white/10 bg-black/10 p-2 rounded-md"
                  onClick={handleCreateClick}
                >
                  <Plus size={15} />
                  Add <span>New</span> Task
                </button>
              </div>
            </div>
            <div className="overflow-y-scroll h-[80vh] scrollbar-thin-black">
              {tasks.length > 0 ? (
                <TaskBoard
                  tasks={displayedTasks}
                  Layout={Layout}
                  onEditTask={handleEditClick}
                  onDeleteTask={handleDeleteTask}
                  onToggleStatus={handleToggleStatus}
                  onToggleImportant={handleToggleImportant}
                />
              ):(
            <div>
              {loading ? (
                <>
                  <div className="w-20 h-20 mx-auto border-4 border-white/30 border-t-white text-center text-white text-6xl mt-10 max-sm:text-3xl rounded-full animate-spin" />
                </>
              ) : (
                <>
                <h1 className="text-center text-white text-6xl mt-10 max-sm:text-3xl">No Task Added</h1>
                </>
              )}
            </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
