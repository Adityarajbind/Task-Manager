import React from "react";
import { useState, useContext } from "react";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskBoard from "../components/TaskBoard"
const Dashboard = () => {
    const [tasks, setTasks] = useState([
    {
      _id: "1",
      title: "Learn React",
      description: "Finish hooks and context API lorem ipsum dolor sit amet, consectetur adipiscing elit.fkahsjdfhsdjfhj",
      status: "pending",
    },
    {
      _id: "2",
      title: "Build MERN App",
      description: "Complete authentication flow",
      status: "completed",
    },
    {
      _id: "3",
      title: "Design Dashboard",
      description: "Create glassmorphism UI",
      status: "pending",
    },
  ]);
  return (
    <>
      <Background />
      <div className="relative z-10 min-h-screen w-full p-4">
        <div className="relative w-full h-full rounded-xl border-2 border-white/10 bg-white/4 backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.4)] flex">
          <div className="SideBar ">
          <Sidebar />
          </div>
          <div className="Main-Content w-full ">
          <Navbar />
          <TaskBoard tasks={tasks} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
