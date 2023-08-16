

interface info {
  dog: DogType;
  onPress?: () => void;
}

export default function Dog(props: info) {
  return (
    <figure id='dog' className='flex flex-col w-fit h-fit m-2'>
      <img
        id='picture'
        className='h-[400px] w-[400px] object-contain border-solid border-sky-500 border-2'
        src={props.dog.image}
        onClick={props.onPress}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.alt = "Image Not Found - Bad URL";
        }}
      ></img>
      <figcaption id='name' className='text-center p-3 text-xl'>{props.dog.name}</figcaption>
    </figure>
  );
}
