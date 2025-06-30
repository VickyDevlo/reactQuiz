import { AddTask } from "@/components/AddTask";
import { PageLayout } from "@/components/PageLayout";
import { Task } from "@/components/Task";
import { Button } from "@/components/ui/button";
import { Plus, RemoveFormatting, X } from "lucide-react";
import React, { useState } from "react";

const TaskTracker = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleDeleteTask = (taskData) => {
    const deletedTask = tasks.filter((item) => item !== taskData);
    setTasks(deletedTask);
  };

  return (
    <PageLayout className="flex flex-col items-center justify-center container mx-auto mt-7">
      <div className="border border-border rounded-md max-w-[500px] w-full p-2 md:p-7">
        <div className="flex items-center  justify-between gap-3 flex-wrap mb-5">
          <h1 className="max-md:whitespace-nowrap md:text-3xl font-semibold">
            Task Tracker
          </h1>

          <Button
            size={"icon"}
            onClick={() => setShowAddTask(!showAddTask)}
            className={`${
              showAddTask
                ? "bg-red-500 hover:bg-bg-red-500"
                : "bg-[#008000] hover:bg-[#008000]"
            } py-2.5 px-5 text-md  
              cursor-pointer rounded max-md:text-sm`}
          >
            {showAddTask ? <X /> : <Plus />}
          </Button>
        </div>
        {showAddTask ? (
          <AddTask
            setTasks={setTasks}
            tasks={tasks}
            setShowAddTask={setShowAddTask}
          />
        ) : (
          <Task tasks={tasks} handleDeleteTask={handleDeleteTask} />
        )}
      </div>
    </PageLayout>
  );
};

export default TaskTracker;
