import { useState } from "react";
import { Task } from "../../types/Task";
import { Modal } from "../Modal/Modal";
import "./taskItem.css";
import type { CSSProperties } from "react";
import { EditTaskForm } from "../EditTaskForm/EditTaskForm";

interface TaskItemProps {
  task: Task;
  onEdit: (updatedTask: Partial<Task>) => void;
  onDelete: (id: number) => void;
}

export function TaskItem({ task, onEdit, onDelete }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  if (!task) {
    return <div>Error: Task is undefined</div>;
  }

  const handleEdit = (updatedTask: Partial<Task>) => {
    task.status = updatedTask.status || "todo";
    onEdit(task);
    setIsEditing(false);
  };

  const getStatusStyle = (status: string): CSSProperties => {
    switch (status) {
      case "todo":
        return {
          color: "blue",
          padding: "5px 10px",
          textTransform: "uppercase" as const,
          borderRadius: "5px"
        };
      case "in-progress":
        return {
          color: "orange",
          padding: "5px 10px",
          textTransform: "uppercase" as const,
          borderRadius: "5px"
        };
      case "completed":
        return {
          color: "green",
          padding: "5px 10px",
          textTransform: "uppercase" as const,
          borderRadius: "5px"
        };
      default:
        return {};
    }
  };

  return (
    <>
      <div className="task-item">
        <div>
          <span>{task.title}</span>
        </div>
        <div>
          <span style={getStatusStyle(task.status)}>{task.status}</span>
        </div>
        <div>
          <button onClick={() => setIsEditing(true)} className="task-item-edit">
            Edit
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="task-item-delete"
          >
            Delete
          </button>
        </div>
      </div>

      <Modal
        isOpen={isEditing}
        title="Edit Task"
        onClose={() => setIsEditing(false)}
      >
        <EditTaskForm task={task} onSave={handleEdit} />
      </Modal>
    </>
  );
}
