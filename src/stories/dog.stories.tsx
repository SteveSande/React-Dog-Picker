import type { Meta, StoryObj } from "@storybook/react";
import Dog from "../components/Dog";

const meta: Meta<typeof Dog> = {
  component: Dog,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const defaultDog: DogType = {
  image:
    "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
  name: "Ralph",
  color: "bg-pink-300",
};

export const squareImage: Story = {
  args: {
    dog: defaultDog,
  },
};

const wideDog: DogType = {
  image: "https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg",
  name: "Ralph",
  color: "bg-pink-300",
};

export const wideImage: Story = {
  args: {
    dog: wideDog,
  },
};

const tallDog: DogType = {
  image: "https://images.dog.ceo/breeds/waterdog-spanish/20180714_201544.jpg",
  name: "Ralph",
  color: "bg-pink-300",
};

export const tallImage: Story = {
  args: {
    dog: tallDog,
  },
};

const noImage: DogType = {
  image: "badlink",
  name: "Ralph",
  color: "bg-pink-300",
};

export const badImageLink: Story = {
  args: {
    dog: noImage,
  },
};
