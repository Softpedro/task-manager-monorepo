import type { Meta, StoryObj } from "@storybook/react";
import { TaskItem } from "./TaskItem";

const meta: Meta<typeof TaskItem> = {
  title: "Components/TaskItem",
  component: TaskItem,
  tags: ["autodocs"],
  args: {
    task: {
      id: 1,
      title: "Tarea de Prueba",
      description: "Esta es una tarea de prueba para testing.",
      status: "todo"
    }
  },
  argTypes: {
    onEdit: { action: "edit" },
    onDelete: { action: "delete" }
  }
};

export default meta;

type Story = StoryObj<typeof TaskItem>;

export const Default: Story = {};

export const CompletedTask: Story = {
  args: {
    task: {
      id: 2,
      title: "Tarea Completada",
      description: "Esta tarea está completada.",
      status: "completed"
    }
  }
};

export const InProgressTask: Story = {
  args: {
    task: {
      id: 3,
      title: "Tarea en Progreso",
      description: "Esta tarea está en progreso.",
      status: "in-progress"
    }
  }
};
