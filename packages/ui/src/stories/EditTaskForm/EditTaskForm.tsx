import { useState } from "react";
import { Task } from "../../types/Task";

interface EditTaskFormProps {
  task: Task;
  onSave: (updatedTask: Partial<Task>) => void;
}

export function EditTaskForm({ task, onSave }: EditTaskFormProps) {
  const [status, setStatus] = useState(task.status);

  const handleSave = () => {
    onSave({ id: task.id, status });
  };

  return (
    <form>
      <div>
        <label htmlFor="status">Estado:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as Task["status"])}
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button type="button" onClick={handleSave}>
        Guardar
      </button>
    </form>
  );
}
