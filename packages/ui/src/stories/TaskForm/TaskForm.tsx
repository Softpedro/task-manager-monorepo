import React, { useState } from "react";
import { Task } from "../../types/Task";
import "./taskForm.css";

interface TaskFormProps {
  task?: Task;
  onSave: (values: Omit<Task, "id">) => void;
}

export function TaskForm({ task, onSave }: TaskFormProps) {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [status, setStatus] = useState(task?.status || "todo");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, description, status });
    setTitle("");
    setDescription("");
    setStatus("todo");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div>
        <label htmlFor="title">Título:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
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
      <button type="submit">Guardar</button>
    </form>
  );
}
