import GameCSS from './game.module.css'
import Dog from "./dog/dog"
import { useState, useEffect} from 'react'

function Game() {
  const [dogs, setDogs] = useState<string[]>([]);
  const [fave, setFave] = useState<string>('');
  const [count, setCount] = useState<number>(2);
  const [images, setImages] = useState<string[]>();

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/10')
      .then(response => response.json())
      .then(data => {
        setDogs(data.message)
        setImages(data.message.slice(0,2));
      });
  }, []);

  const onDogPick = (image: any) => {
    setFave(image);
    setImages(dogs.slice(count, count + 2));
    setCount(count+2)
  }

  if (images) {
    return (
      <div className={GameCSS.dogs}>
        {
          images.map(image => 
          <Dog
            key={image}
            image={image}
            onPress={() => onDogPick(image)}
          />
          )
        }
      </div>
    )
  }
  return null;
}

export default Game