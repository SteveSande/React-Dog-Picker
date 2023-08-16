

interface info {
  dog: DogType;
  onPress?: () => void;
}

export default function Dog(props: info) {

  return (
    <figure id='dog' className='flex flex-col w-fit h-fit m-2 border-solid border-black border'>
      <img
        id='picture'
        className='h-[300px] object-contain'
        src={props.dog.image}
        onClick={props.onPress}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.alt = "Image Not Found - Bad URL";
        }}
      ></img>
      <figcaption id='name' className={`text-center p-3 text-xl ${props.dog.color}`}>{props.dog.name}</figcaption>
    </figure>
  );
}
