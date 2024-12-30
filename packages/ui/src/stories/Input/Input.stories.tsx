import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { InputProvider } from "./InputContext";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <InputProvider initialValue="Hello Storybook">
        <Story />
      </InputProvider>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Type something..."
  }
};

export const WithError: Story = {
  decorators: [
    (Story) => (
      <InputProvider error={true}>
        <Story />
      </InputProvider>
    )
  ],
  args: {
    placeholder: "This input has an error"
  }
};

export const WithSuccess: Story = {
  decorators: [
    (Story) => (
      <InputProvider success={true}>
        <Story />
      </InputProvider>
    )
  ],
  args: {
    placeholder: "This input is valid"
  }
};
