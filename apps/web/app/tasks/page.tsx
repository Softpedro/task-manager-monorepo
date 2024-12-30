"use client";

import { useEffect } from "react";
import { TaskList } from "ui";
import { TaskForm } from "ui";
import { taskService } from "../services/taskService";
import { Task, useTaskStore } from "../state/taskStore";
import { LogoutButton } from "./components";

export default function TasksPage() {
  const { tasks, fetchTasks, addTask, updateTask, deleteTask } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleAddTask = async (values: Omit<Task, "id">) => {
    const newTask = await taskService.createTask(values);
    addTask(newTask);
  };

  const handleEditTask = (updatedTask: Partial<Task>) => {
    if (updatedTask.id) {
      updateTask(updatedTask.id, {
        title: updatedTask.title || "",
        description: updatedTask.description || "",
        status: updatedTask.status || "todo"
      });
    }
  };

  const handleDeleteTask = (id: number) => {
    deleteTask(id);
  };

  return (
    <div className="p-4 pt-[120px]">
      <div className="fixed top-0 left-0 w-full bg-white box-shadow-md py-3 px-4">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Prueba Técnica
        </h1>
        <div className="absolute top-4 right-3">
          <LogoutButton />
        </div>
      </div>
      <div className="flex gap-8 items-start max-md:flex-col">
        <div className="flex justify-center mb-12 max-md:mb-4 max-md:w-full">
          <TaskForm onSave={handleAddTask} />
        </div>
        <div className="flex-1 max-md:w-full">
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        </div>
      </div>
    </div>
  );
}
