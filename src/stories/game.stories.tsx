import type { Meta, StoryObj } from '@storybook/react';
import Game from "../components/Game";

const meta: Meta<typeof Game> = {
    component: Game
}

export default meta;

type Story = StoryObj<typeof meta>;

const sampleDog: DogType = {
    image: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
    name: 'Ralph'
};

export const matchup: Story = {
    args: {
        story: true,
        storyMatchup: [sampleDog, sampleDog]
    }
};

export const loading: Story = {
    args: {
        story: true
    }
};

export const dreamDog: Story = {
    args: {
        story: true,
        storyFave: sampleDog
    }
};

