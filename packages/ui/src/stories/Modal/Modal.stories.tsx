import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  args: {
    isOpen: true,
    title: "Edit Task"
  },
  argTypes: {
    onClose: { action: "closed" }
  }
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: <p>This is the modal content</p>
  }
};
