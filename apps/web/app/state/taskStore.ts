import { create } from "zustand";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "completed";
}

interface TaskState {
  tasks: Task[];
  fetchTasks: () => Promise<void>;
  addTask: (task: Task) => void;
  updateTask: (id: number, updates: Partial<Task>) => void;
  deleteTask: (id: number) => void;
}
// Asegúrate de que la variable está definida
const API_URL = process.env.NEXT_PUBLIC_API_URL;
if (!API_URL) {
  throw new Error("API_URL is not defined in the environment variables");
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [], // Estado inicial como arreglo vacío
  fetchTasks: async () => {
    const response = await fetch(`${API_URL}/tasks`);
    const data: Task[] = await response.json();
    set({ tasks: data });
  },
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      )
    })),
  deleteTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) }))
}));
