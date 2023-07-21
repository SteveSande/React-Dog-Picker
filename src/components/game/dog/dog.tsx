import DogCSS from './dog.module.css'
import Image from "react-bootstrap/Image"

interface info {
    image: string;
    setFave: (image: string) => void;
}

function Dog (props:info) {
    function setFave() {
        props.setFave(props.image);
    }
    
    return (
        <>
            <Image src={props.image} onClick={setFave}></Image>   
        </>
    )
}

export default Dog