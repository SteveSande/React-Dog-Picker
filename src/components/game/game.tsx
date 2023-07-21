import GameCSS from './game.module.css'
import Dog from "./dog/dog"
import {useState, useEffect, useRef} from 'react'

function Game () {
    const [dogs, setDogs] = useState<string[]>([]);
    const [picked, setPicked] = useState<boolean>(false);
    const [fave, setFave] = useState<string>('');
    const [images, setImages] = useState<string[]>();

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/10')
        .then(response => response.json())
        .then(data => setDogs(data.message));
    },[]);

    useEffect(() => {
        setImages([dogs[0], dogs[1]]);
    },[dogs]);

    useEffect(() => {
        setImages([dogs[1], dogs[2]]);
    }),[picked];


    if (images)
    {
        return (
            <>

                <div className={GameCSS.dogs}>
                    <Dog image={images[0]} setFave={setFave} picked={picked} setPicked={setPicked}/>
                    <Dog image={images[1]} setFave={setFave} picked={picked} setPicked={setPicked} />
                </div>
                
            </>
        )
    }
}

export default Game