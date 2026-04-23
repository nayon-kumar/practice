import { AddTask } from "@/components/Tasks/AddTask";
import { createATask } from "@/lib/actions";
import { getTasks } from "@/lib/tasks";
import TaskCard from "@/ui/TaskCard";
import Link from "next/link";

const TasksPage = async () => {
  const tasks = await getTasks();
  return (
    <div className="px-5">
      <p className="mt-4 pb-4">Tasks: {tasks.length}</p>
      <AddTask createATask={createATask} />
      <Link className="btn btn-primary" href="/tasks/new">
        Add Task
      </Link>
      <div className="grid grid-cols-3 gap-8 mt-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
