import type { Meta, StoryObj } from "@storybook/react";
import { EditTaskForm } from "./EditTaskForm";

const meta: Meta<typeof EditTaskForm> = {
  title: "Components/EditTaskForm",
  component: EditTaskForm,
  args: {
    task: {
      id: 1,
      title: "Sample Task",
      description: "Sample Description",
      status: "todo"
    }
  },
  argTypes: {
    onSave: { action: "saved" }
  }
};

export default meta;

type Story = StoryObj<typeof EditTaskForm>;

export const Default: Story = {};
