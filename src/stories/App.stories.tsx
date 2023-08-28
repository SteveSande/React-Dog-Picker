import type { Meta, StoryObj } from "@storybook/react";
import App from "../App";

const meta: Meta<typeof App> = {
  component: App,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const app: Story = {};
