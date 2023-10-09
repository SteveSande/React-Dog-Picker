import Dog from "./Dog";
import { useEffect } from "react";
import Names from "../assets/dognames.json";
import { Button } from "ariakit";
import { useLocalStorage } from "usehooks-ts";

interface info {
  /** This is a setState function that is passed in from the App component. It sets the background of the page. */
  setBackground: Function;
}

/** The Game component presents the different states of the game.
 * There is a loading screen when images are fetched from an API and served up in matchups.
 * There is a matchup screen where two Dog components are presented for the user to choose from.
 * Finally there is a end screen where the persons fave or dream dog is presented.
 */
export default function Game(props: info) {
  const [dogs, setDogs] = useLocalStorage<DogType[]>("dogs", []);
  const [fave, setFave] = useLocalStorage<DogType>("test", {
    image: "",
    name: "",
    color: "",
  });
  const [count, setCount] = useLocalStorage<number>("count", 1);
  const [matchup, setMatchup] = useLocalStorage<DogType[]>("matchup", []);
  const [loading, setLoading] = useLocalStorage<boolean>("loading", true);
  const [rounds, setRounds] = useLocalStorage<number>("rounds", 1);
  const [faves, setFaves] = useLocalStorage<DogType[]>("faves", []);
  const [faveFaceoff, setFaveFaceoff] = useLocalStorage<boolean>(
    "faveFaceoff",
    false
  );
  const [indexZero, setIndexZero] = useLocalStorage<boolean>("indexZero", true);

  // get an array of urls for dog pictures from the API
  // associate each url with a random name and color
  // create an array of dogs with the data and copy it into the dogs and matchup states
  // the game starts after the states are set
  // the API call is not necessary when it's a fave faceoff round or when Storybook is being used
  useEffect(() => {
    if (dogs.length === 0 && !faveFaceoff) {
      fetch("https://dog.ceo/api/breeds/image/random/10")
        .then((response) => response.json())
        .then((data) => {
          let dogsToCopy: DogType[] = [];
          const dogPics = data.message;
          const colors: string[] = [
            "bg-red-300",
            "bg-orange-300",
            "bg-amber-300",
            "bg-yellow-300",
            "bg-lime-300",
            "bg-green-300",
            "bg-emerald-300",
            "bg-teal-300",
            "bg-cyan-300",
            "bg-sky-300",
            "bg-blue-300",
            "bg-indigo-300",
            "bg-violet-300",
            "bg-purple-300",
            "bg-fuchsia-300",
            "bg-pink-300",
            "bg-rose-300",
          ];
          dogPics.forEach((pic: string) => {
            const nameIndex = Math.floor(Math.random() * Names.length);
            const colorIndex = Math.floor(Math.random() * colors.length);
            const dog: DogType = {
              image: pic,
              name: Names[nameIndex],
              color: colors[colorIndex],
            };
            dogsToCopy.push(dog);
          });
          setDogs(dogsToCopy);
          setMatchup(dogsToCopy.slice(0, 2));
          setLoading(false);
        });
    } else if (dogs.length != 0) {
      setMatchup(dogs.slice(0, 2));
    }
  }, [rounds]);

  // this function is executed when the user has selected a dog from a matchup
  // when a selection has been made the game needs to be advanced
  // pick is the dog that they clicked on
  const onDogPick = (pick: DogType) => {
    if (matchup && matchup[0] === pick) {
      setIndexZero(true);
    } else {
      setIndexZero(false);
    }
    setFave(pick);
    setCount((prevCount) => prevCount + 1);
  };

  // ensure matchup is updated whenever fave or count are updated
  // when a standard round ends the overall fave needs to be stored
  // when a fave faceoff ends the background is set to make it more special
  useEffect(() => {
    if (fave.image != "" && indexZero) {
      setMatchup([fave, dogs[count]]);
    } else if (fave.image) {
      setMatchup([dogs[count], fave]);
    }
    if (count === dogs.length && !faveFaceoff) {
      const updatedFaves = [...faves];
      updatedFaves.push(fave);
      setFaves(updatedFaves);
    } else if (count === dogs.length && faveFaceoff) {
      props.setBackground('bg-[url("/src/assets/hearts.png")]');
    }
  }, [localStorage.getItem("fave"), count]);

  // the user has started a new round
  // several states need to be set to properly launch it
  // an API call will be triggered to get fresh data
  const newRound = () => {
    props.setBackground("");
    setFaveFaceoff(false);
    setLoading(true);
    setFave({ image: "", name: "", color: "" });
    setCount(1);
    setRounds((prevRounds) => (prevRounds += 1));
    setDogs([]);
  };

  // the user has started a fave faceoff
  // several states need to be set to properly launch it
  // it's not necessary to do an API call because the faves have been saved locally
  const executeFaveFaceoff = () => {
    setFaveFaceoff(true);
    setLoading(true);
    setDogs(faves);
    setMatchup(faves.slice(0, 2));
    setCount(1);
    setFave({ image: "", name: "", color: "" });
    setRounds(0);
    setFaves([]);
    setLoading(false);
  };

  // First Condition: a loading screen is returned if a response from the API is needed to proceed
  // Second Condition: most of the time a matchup is returned with 2 dogs for the user to choose from
  // Third Condition: if all the dogs have been seen then the user only sees their fave or dream dog, there are also controls to start a new round or fave faceoff
  // Fourth Conditon: should be unreachable, if I made the third condition else React would complain about possible null matchup I think
  if (loading) {
    return (
      <div
        id="game"
        className="flex justify-center items-center h-[300px] cursor-wait"
      >
        <h1 className="text-center text-xl">Loading...</h1>
      </div>
    );
  } else if (matchup && count < dogs.length) {
    return (
      <div id="game" className="flex flex-wrap justify-center">
        {matchup.map((dog, index) => (
          <Dog
            key={index}
            dog={dog}
            onPress={() => onDogPick(dog)}
            fave={false}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div
        id="game"
        className="flex flex-col flex-wrap justify-center items-center"
      >
        <Dog dog={fave} fave={true} dream={faveFaceoff} />
        <div id="controls" className="m-8 flex flex-wrap justify-center">
          <Button
            id="new-round"
            className="m-2 bg-green-700 p-3 text-xl font-bold text-white rounded-lg"
            onClick={newRound}
          >
            New Round
          </Button>
          <Button
            id="fave-faceoff"
            className="m-2 bg-red-700 p-3 text-xl font-bold text-white rounded-lg disabled:opacity-25"
            onClick={executeFaveFaceoff}
            disabled={rounds < 2}
          >
            Fave Faceoff
          </Button>
        </div>
      </div>
    );
  }
}
