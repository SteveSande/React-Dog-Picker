import { Button } from "ariakit";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface info {
  /** This is the dog object to display. A dog object includes a name, picture, and color. */
  dog: DogType;
  /** This is the function to execute when a user clicks on the dog component. */
  onPress?: () => void;
  /** This is true if the dog was the most liked dog from a regular round of play. */
  fave?: boolean;
  /** This is true if the dog was the most liked dog from a "Fave Faceoff" round. */
  dream?: boolean;
}

/** The Dog component creates an optionally-interactive visual representation of a dog object. */
export default function Dog(props: info) {
  // edit the name and cursor (no interaction) if it's a fave or dream dog
  let name = "";
  let cursor = "cursor-pointer";
  let disabled = false;
  if (props.fave && !props.dream) {
    name = "💗" + props.dog.name + "💗";
    cursor = "";
    disabled = true;
  } else if (props.dream) {
    name = "🌈☁️" + props.dog.name + "☁️✨";
    cursor = "";
    disabled = true;
  } else {
    name = props.dog.name;
  }

  return (
    <Button
      id={props.dog.name}
      className={`flex flex-col w-fit h-fit m-2 border-solid border-black border ${props.dog.color} ${cursor}`}
      onClick={props.onPress}
      disabled={disabled}
    >
      <figure>
        <LazyLoadImage
          key={props.dog.name}
          id="picture"
          className="h-[300px] w-[400px] object-contain"
          alt="randomly selected picture of a dog"
          src={props.dog.image}
          placeholderSrc="favicon.png"
          effect="blur"
        ></LazyLoadImage>
        <figcaption id="name" className="text-center p-3 text-xl">
          {name}
        </figcaption>
      </figure>
    </Button>
  );
}
