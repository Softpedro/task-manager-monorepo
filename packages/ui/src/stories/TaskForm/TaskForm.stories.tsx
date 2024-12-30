import type { Meta, StoryObj } from "@storybook/react";
import { TaskForm } from "./TaskForm";

const meta: Meta<typeof TaskForm> = {
  title: "Components/TaskForm",
  component: TaskForm,
  tags: ["autodocs"],
  args: {
    onSave: (values) => console.log("Save:", values)
  }
};

export default meta;

type Story = StoryObj<typeof TaskForm>;

export const Default: Story = {};

export const EditMode: Story = {
  args: {
    task: {
      id: 1,
      title: "Edit Task",
      description: "Task to edit",
      status: "todo"
    }
  }
};
