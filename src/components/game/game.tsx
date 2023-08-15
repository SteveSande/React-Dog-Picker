import GameCSS from "./game.module.css";
import Dog from "../dog/dog";
import { useState, useEffect } from "react";
import Names from "../../assets/dognames.json";

// this is just to make it possible to create stories using Storybook
interface info {
  story?: boolean;
  storyMatchup?: DogType[];
  storyFave?: DogType;
}

export default function Game(props: info) {
  const [dogs, setDogs] = useState<DogType[]>([]);
  const [fave, setFave] = useState<DogType>({ image: "", name: "" });
  const [count, setCount] = useState<number>(1);
  const [matchup, setMatchup] = useState<DogType[]>();
  const [loading, setLoading] = useState<boolean>(true);

  // get an array of urls for dog pictures from the API
  // associate each url with a name to fill the dogs array
  useEffect(() => {
    if (props.story === undefined) {
      fetch("https://dog.ceo/api/breeds/image/random/10")
        .then((response) => response.json())
        .then((data) => {
            let dogsToCopy: DogType[] = [];
            const dogPics = data.message;
            dogPics.forEach((pic: string) => {
              const randomIndex = Math.floor(Math.random() * Names.length);
              const dog: DogType = {
                image: pic,
                name: Names[randomIndex],
              };
              dogsToCopy.push(dog);
            });
            setDogs(dogsToCopy);
            setMatchup(dogsToCopy.slice(0, 2));
            setLoading(false);
        });
    }
    else {
      if (props.storyMatchup != undefined) {
        setMatchup(props.storyMatchup);
        setLoading(false);
      }
      if (props.storyFave != undefined) {
        setFave(props.storyFave);
        setCount(10);
        setLoading(false);
      }
    }
  }, []);

  // this is executed when the user has selected a dog
  // pick is the dog they clicked on
  const onDogPick = (pick: DogType) => {
    setFave(pick);
    setCount((prevCount) => prevCount + 1);
  };

  // ensure matchup is updated after fave is updated
  useEffect(() => {
    fave.image != "" && setMatchup([fave, dogs[count]]);
  }, [fave, count]);

  // return matchups until all dogs have been seen
  // once all dogs have been seen just return the fave
  if (loading) {
    return (
      <div className={GameCSS.dogs}>
        <h1>Loading...</h1>
      </div>
    );
  } else if (matchup && count < 10) {
    return (
      <div className={GameCSS.dogs}>
        {matchup.map((dog, index) => (
          <Dog key={index} dog={dog} onPress={() => onDogPick(dog)} />
        ))}
      </div>
    );
  } else if (matchup && count >= 10) {
    return (
      <div className={GameCSS.dogs}>
        <Dog dog={fave} onPress={() => onDogPick(fave)} />
      </div>
    );
  } else {
    return null;
  }
}
