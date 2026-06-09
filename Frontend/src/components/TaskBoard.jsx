import TaskCard from "./TaskCard";
import { useState } from "react";
const TaskBoard = ({
  tasks,
  Layout,
  onEditTask,
  onDeleteTask,
  onToggleStatus,
  onToggleImportant,
}) => {
  return (
    <>

      <div className={`grid ${Layout ==="grid3"?"grid-cols-3":"grid-cols-2"} gap-6 p-2`}>
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
            onToggleStatus={onToggleStatus}
            HandleStared={onToggleImportant}
          />
        ))}
      </div>
    </>
  );
};

export default TaskBoard;
