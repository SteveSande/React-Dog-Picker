interface info {
  dog: DogType;
  onPress?: () => void;
  fave: boolean;
}

export default function Dog(props: info) {
  let name = '';
  let cursor = 'cursor-pointer'
  if (props.fave) {
    name = '💗' + props.dog.name + '💗';
    cursor = ''
  }
  else {
    name = props.dog.name
  }


  return (
    <figure id='dog' className={`flex flex-col w-fit h-fit m-2 border-solid border-black border ${cursor}`}>
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
      <figcaption id='name' className={`text-center p-3 text-xl ${props.dog.color}`}>{name}</figcaption>
    </figure>
  );
}
