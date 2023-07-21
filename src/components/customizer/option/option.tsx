import Button from 'react-bootstrap/Button'

interface info {
    numberOfDogs: number;
}

function Option (props:info) {
    function num () {
        alert(props.numberOfDogs);
    }

    return (
        <Button onClick={num}>{props.numberOfDogs}</Button>
    )
}

export default Option