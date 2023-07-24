import DogCSS from './dog.module.css'

interface info {
  image: string;
  onPress: () => void;
}

export default function Dog(props: info) {
  return (
    <img
      className={DogCSS.image}
      src={props.image}
      onClick={props.onPress}
    >
    </img>
  )
}