import DogCSS from "./dog.module.css";

interface info {
  dog: DogType;
  onPress: () => void;
}

export default function Dog(props: info) {
  return (
    <div className={DogCSS.dog}>
      <img
        className={DogCSS.image}
        src={props.dog.image}
        onClick={props.onPress}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.alt = "Image Not Found - Bad URL";
        }}
      ></img>
      {props.dog.name}
    </div>
  );
}
