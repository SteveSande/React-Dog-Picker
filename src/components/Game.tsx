import Dog from "./Dog";
import { useState, useEffect } from "react";
import Names from "../assets/dognames.json";

// this is just to make it possible to create stories using Storybook
interface info {
  story?: boolean;
  storyMatchup?: DogType[];
  storyFave?: DogType;
}

export default function Game(props: info) {
  const [dogs, setDogs] = useState<DogType[]>([]);
  const [fave, setFave] = useState<DogType>({ image: '', name: '', color: '' });
  const [count, setCount] = useState<number>(1);
  const [matchup, setMatchup] = useState<DogType[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [restart, setRestart] = useState<boolean>(false);

  // get an array of urls for dog pictures from the API
  // associate each url with a name to fill the dogs array
  useEffect(() => {
    if (props.story === undefined) {
      fetch("https://dog.ceo/api/breeds/image/random/10")
        .then((response) => response.json())
        .then((data) => {
            let dogsToCopy: DogType[] = [];
            const dogPics = data.message;
            const colors: string[] = ['bg-stone-300','bg-red-300','bg-orange-300','bg-amber-300','bg-yellow-300','bg-lime-300','bg-green-300','bg-emerald-300','bg-teal-300','bg-cyan-300','bg-sky-300','bg-blue-300','bg-indigo-300','bg-violet-300','bg-purple-300','bg-fuchsia-300','bg-pink-300','bg-rose-300'];
            dogPics.forEach((pic: string) => {
              const nameIndex = Math.floor(Math.random() * Names.length);
              const colorIndex = Math.floor(Math.random() * colors.length);
              const dog: DogType = {
                image: pic,
                name: Names[nameIndex],
                color: colors[colorIndex]
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
  }, [restart]);

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

  const executeRestart = () => {
    setLoading(true);
    setFave({ image: '', name: '', color: '' });
    setCount(1);
    setRestart(prevRestart => !prevRestart);
  }

  // return matchups until all dogs have been seen
  // once all dogs have been seen just return the fave
  if (loading) {
    return (
      <div id='game' className='flex justify-center items-center h-[300px] cursor-wait'>
        <h1 className='text-center text-xl'>Loading...</h1>
      </div>
    );
  } else if (matchup && count < 10) {
    return (
      <div id='game' className='flex flex-wrap justify-center'>
        {matchup.map((dog, index) => (
          <Dog key={index} dog={dog} onPress={() => onDogPick(dog)} fave={false} />
        ))}
      </div>
    );
  } else if (matchup && count >= 10) {
    return (
      <div id='game' className='flex flex-col flex-wrap justify-center  items-center'>
        <Dog dog={fave} onPress={() => onDogPick(fave)} fave={true} />
        <button 
          className='m-8 bg-green-700 p-3 text-xl font-bold text-white rounded-lg' 
          onClick={executeRestart}
        >
          Restart
        </button>
      </div>
    );
  } else {
    return null;
  }
}
