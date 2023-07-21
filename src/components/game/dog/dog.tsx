import DogCSS from './dog.module.css'
import Image from "react-bootstrap/Image"

interface info {
    image: string;
}

function Dog (props:info) {
    return (
        <>
            <div className={DogCSS.picture}>
                <div className={DogCSS.border}>
                    <Image src={props.image}></Image>   
                </div>
            </div>
        </>
    )
}

export default Dog