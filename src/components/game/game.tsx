import GameCSS from './game.module.css'
import Button from "react-bootstrap/Button"
import Dog from "./dog/dog"
import {useState, useEffect} from 'react'

function Game () {
    const [dogs, setDogs] = useState([]);
    const [fave, setFave] = useState();

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/10')
        .then(response => response.json())
        .then(data => setDogs(data.message))
    },[]);

    useEffect(() => {
        console.log(fave);
    },[fave])

    return (
        <>
            {/* <br />
            <Button onClick={getDogs}>Start</Button>
            <br /> */}
            <div className={GameCSS.dogs}>
                <Dog image={dogs[0]} setFave={setFave} />
                <Dog image={dogs[1]} setFave={setFave} />
            </div>
            
        </>
    )
}

export default Game