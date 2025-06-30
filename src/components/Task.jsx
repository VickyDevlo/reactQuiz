import { formatDate } from "@/utils/formatDate";
import { X } from "lucide-react";

export const Task = ({ tasks, handleDeleteTask }) => {
  return tasks.length ? (
    <>
      {tasks.map((task, i) => (
        <div key={i} className="truncate bg-muted py-2.5 px-2 md:px-5 m-1.5">
          <div className="flex items-center justify-between">
            <h1 className="text-sm md:text-lg font-semibold capitalize truncate">
              {task.taskTitle}
            </h1>
            <X
              color="red"
              strokeWidth={5}
              size={16}
              onClick={() => handleDeleteTask(task)}
              className="cursor-pointer flex-shrink-0 "
            />
          </div>
          <span className="font-medium text-muted-foreground text-sm max-md:text-xs">
            {formatDate(task.taskDateTime)}
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
