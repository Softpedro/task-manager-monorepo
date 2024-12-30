import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "Components/LoginForm",
  component: LoginForm,
  args: {
    errorMessage: ""
  },
  argTypes: {
    onLogin: { action: "login" }
  }
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    errorMessage: "Invalid username or password"
  }
};
