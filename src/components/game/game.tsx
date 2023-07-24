import GameCSS from './game.module.css'
import Dog from "./dog/dog"
import { useState, useEffect} from 'react'

export default function Game() {
  const [dogs, setDogs] = useState<string[]>([]);
  const [fave, setFave] = useState<string>('');
  const [count, setCount] = useState<number>(1);
  const [images, setImages] = useState<string[]>();

  // get an array of urls for dog pictures from the API
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/10')
      .then(response => response.json())
      .then(data => {
        setDogs(data.message)
        setImages(data.message.slice(0,2));
      });
  }, []);

  // this is executed when the user has selected a dog
  // image is the url to the dog they clicked on
  const onDogPick = (image: string) => {
    setFave(image);
    setCount(count + 1);
  };

  // ensure images is updated after fave is updated
  useEffect(() => {
    setImages([fave, dogs[count]]);
  }, [fave]);
    
  // ensure images is updated after count is updated
  useEffect(() => {
    setImages([fave, dogs[count]]);
  }, [count]);

  // return head-to-heads until all pictures have been seen
  // once all pictures have been seen just return the fave
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