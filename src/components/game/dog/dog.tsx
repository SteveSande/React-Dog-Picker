import DogCSS from './dog.module.css'

interface info {
    image: string;
    setFave: (image: string) => void;
    picked: boolean;
    setPicked: (toggle: boolean) => void
}

function Dog (props:info) {
    function setFave() {
        props.setFave(props.image);
        props.setPicked(!props.picked);
    }
    
    return (
        <img className={DogCSS.image} src={props.image} onClick={setFave}></img>   
    )
}

export default Dog