import Dog from "../dog/dog";

interface info {
    fave: DogType;
    onPress?: () => void;
  }

export default function DreamDog(props: info) {
    return (
        <Dog dog={props.fave} />
    );
  }