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
        className="p-2 border rounded mt-1 w-full max-md:placeholder:text-sm"
      />
      <label className="mt-4 max-md:text-sm">Day & Time</label>
      <div className="relative w-full mt-4">
        <label
          htmlFor="day"
          className={`absolute left-3 top-2 text-gray-500 text-sm transition-all duration-200 pointer-events-none
      ${formData.day ? "text-xs -top-2.5 bg-white px-1" : ""}
    `}
        >
          Add Day & Time
        </label>

        <input
          type="datetime-local"
          name="day"
          id="day"
          value={formData.day}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, day: e.target.value }))
          }
          required
          className="p-2 border rounded text-sm w-full pt-6"
        />
      </div>

      <Button disabled={isDisabled} type="submit" className="mt-4 text-lg">
        Save Task
      </Button>
    </form>
  );
};
