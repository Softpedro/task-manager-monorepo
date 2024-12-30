import { TaskItem } from "../TaskItem/TaskItem";
import { Task } from "../../types/Task";

interface TaskListProps {
  tasks: Task[];
  onEdit: (updatedTask: Partial<Task>) => void;
  onDelete: (id: number) => void;
}

export function TaskList({ tasks, onEdit, onDelete }: TaskListProps) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
