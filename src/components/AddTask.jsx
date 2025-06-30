import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export const AddTask = ({ setTasks, setShowAddTask }) => {
  const [taskForm, setTaskForm] = useState({
    taskTitle: "",
    taskDateTime: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!taskForm.taskTitle || !taskForm.taskDateTime) return;
    setTasks((prev) => [...prev, taskForm]);
    setShowAddTask(false);
  };

  const isDisabled = !taskForm.taskTitle || !taskForm.taskDateTime;

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col justify-center w-full">
      <label htmlFor="taskTitle" className="mb-1 max-md:text-sm">
        Task
      </label>
      <input
        type="text"
        name="taskTitle"
        id="taskTitle"
        value={taskForm.taskTitle}
        onChange={(e) =>
          setTaskForm((prev) => ({ ...prev, taskTitle: e.target.value }))
        }
        placeholder="Add Task"
        required
        className="p-2 border rounded mt-1 w-full capitalize max-md:placeholder:text-sm"
      />

      <label htmlFor="taskDateTime" className="mt-4 max-md:text-sm">
        Day & Time
      </label>
      <input
        type="datetime-local"
        name="taskDateTime"
        id="taskDateTime"
        value={taskForm.taskDateTime}
        onChange={(e) =>
          setTaskForm((prev) => ({ ...prev, taskDateTime: e.target.value }))
        }
        required
        className="p-2 border rounded mt-1 text-sm w-full"
      />

      <Button disabled={isDisabled} type="submit" className="mt-4 text-lg">
        Save Task
      </Button>
    </form>
  );
};
