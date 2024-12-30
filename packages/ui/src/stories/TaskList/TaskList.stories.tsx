import type { Meta, StoryObj } from "@storybook/react";
import { TaskList } from "./TaskList";

const meta: Meta<typeof TaskList> = {
  title: "Components/TaskList",
  component: TaskList,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof TaskList>;

export const Default: Story = {
  args: {
    tasks: [
      { id: 1, title: "Tarea 1", description: "Descripción 1", status: "todo" },
      {
        id: 2,
        title: "Tarea 2",
        description: "Descripción 2",
        status: "completed"
      }
    ],
    onEdit: (id) => alert(`Editar tarea con ID: ${id}`),
    onDelete: (id) => alert(`Eliminar tarea con ID: ${id}`)
  }
};
