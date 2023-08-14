import type { Meta, StoryObj } from '@storybook/react';
import Game from "../components/game/game";

const meta: Meta<typeof Game> = {
    component: Game,
    title: 'Game'
}

export default meta;

type Story = StoryObj<typeof meta>;

export const matchup: Story = {};

export const loading: Story = {};

export const dreamDog: Story = {};

