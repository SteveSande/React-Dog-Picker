import GameCSS from './game.module.css'
import Dog from "./dog/dog"
import { useState, useEffect} from 'react'

function Game() {
  const [dogs, setDogs] = useState<string[]>([]);
  const [fave, setFave] = useState<string>('');
  const [count, setCount] = useState<number>(1);
  const [images, setImages] = useState<string[]>();

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/10')
      .then(response => response.json())
      .then(data => {
        setDogs(data.message)
        setImages(data.message.slice(0,2));
      });
  }, []);

  const onDogPick = (image: string) => {
    setFave(image);
    setCount(count + 1);
  };

  // ensure images is up
  useEffect(() => {
    setImages([fave, dogs[count]]);
  }, [fave]);
    
  useEffect(() => {
    setImages([fave, dogs[count]]);
  }, [count]);

  if (images && count < 10) {
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
  else if (count >= 10) {
    return (
        <div className={GameCSS.dogs}>
            <Dog 
                image={fave}
                onPress={() => onDogPick(fave)}
            />
        </div>
    )
  }
  else {
    return null;  
  }
  
}

export default Game