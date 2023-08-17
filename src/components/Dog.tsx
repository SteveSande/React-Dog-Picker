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

/** The dog component creates an optionally interactive visual representation of a dog object. */
export default function Dog(props: info) {
  let name = '';
  let cursor = 'cursor-pointer'
  if (props.fave && !props.dream) {
    name = '💗' + props.dog.name + '💗';
    cursor = ''
  }
  else if (props.dream) {
    name = '🌈☁️' + props.dog.name + '☁️✨';
    cursor = ''
  }
  else {
    name = props.dog.name
  }


  return (
    <figure id='dog' className={`flex flex-col w-fit h-fit m-2 border-solid border-black border ${props.dog.color} ${cursor}`}>
      <img
        id='picture'
        className='h-[300px] object-contain'
        src={props.dog.image}
        onClick={props.onPress}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.alt = "Image Not Found";
          console.log(currentTarget);
        }}
      ></img>
      <figcaption id='name' className='text-center p-3 text-xl'>{name}</figcaption>
    </figure>
  );
}
