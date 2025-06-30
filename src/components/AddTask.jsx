import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export const AddTask = ({ setTasks, setShowAddTask }) => {
  const [formData, setFormData] = useState({
    text: "",
    day: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!formData.text || !formData.day) return;
    setTasks((prev) => [...prev, formData]);
    setShowAddTask(false);
  };

  const isDisabled = !formData.text || !formData.day;

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col justify-center w-full"
    >
      <label className="mb-1 max-md:text-sm">Task</label>
      <input
        type="text"
        name="text"
        value={formData.text}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, text: e.target.value }))
        }
        placeholder="Add Task"
        required
        className="p-2 border rounded mt-1 max-md:placeholder:text-sm"
      />
      <label className="mt-4 max-md:text-sm">Day & Time</label>
      <input
        type="datetime-local"
        name="day"
        value={formData.day}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, day: e.target.value }))
        }
        required
        className="p-2 border rounded mt-1 text-sm"
      />

      <Button disabled={isDisabled} type="submit" className="mt-4 text-lg">
        Save Task
      </Button>
    </form>
  );
};
