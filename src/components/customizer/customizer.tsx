
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import Option from './option/option'

function Customizer () {
    return (
        <>
            <ButtonGroup>
                <Option numberOfDogs={10}/>
                <Option numberOfDogs={20}/>
                <Option numberOfDogs={50}/>
            </ButtonGroup>
        </>
    )
}

export default Customizer