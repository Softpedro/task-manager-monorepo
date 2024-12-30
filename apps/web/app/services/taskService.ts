import { Task } from "../state/taskStore";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const taskService = {
  getTasks: async (): Promise<Task[]> => {
    const response = await fetch(`${API_URL}/tasks`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
      throw new Error(`Error fetching tasks: ${response.statusText}`);
    }

    return response.json();
  },

  createTask: async (task: Omit<Task, "id">): Promise<Task> => {
    const response = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    });

    if (!response.ok) {
      throw new Error(`Error creating task: ${response.statusText}`);
    }

    return response.json();
  },

  updateTask: async (id: number, updates: Partial<Task>): Promise<Task> => {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates)
    });

    if (!response.ok) {
      throw new Error(
        `Error updating task with ID ${id}: ${response.statusText}`
      );
    }

    return response.json();
  },

  deleteTask: async (id: number): Promise<void> => {
    try {
      const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      });

      if (!response.ok) {
        throw new Error(
          `Error deleting task with ID ${id}: ${response.statusText}`
        );
      }
    } catch (error) {
      console.error(`Failed to delete task with ID ${id}:`, error);
      throw error;
    }
  }
};
