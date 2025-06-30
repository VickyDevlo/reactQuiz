import { formatDate } from "@/utils/formatDate";
import { X } from "lucide-react";

export const Task = ({ tasks, handleDeleteTask }) => {
  return tasks.length ? (
    <>
      {tasks.map((task, i) => (
        <div key={i} className="bg-muted py-2.5 px-2 md:px-5 m-1.5">
          <div className="flex items-center justify-between">
            <h1 className="text-sm md:text-lg font-semibold">{task.text}</h1>
            <X
              color="red"
              strokeWidth={5}
              size={18}
              onClick={() => handleDeleteTask(task)}
              className="cursor-pointer"
            />
          </div>
          <span className="font-medium max-md:indent-12 text-xs">
            {formatDate(task.day)}
          </span>
        </div>
      ))}
    </>
  ) : (
    <span className="flex items-center justify-center font-medium text-muted-foreground italic">
      No Tasks To Show
    </span>
  );
};
