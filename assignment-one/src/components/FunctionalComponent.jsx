
import './comp1.css';

const FunctionalComponent = (props) => {
    return (
        <div id={props.id}>
            <h1>This is created using functional component</h1>
            <p>This is done using external css</p>
            <p style={props.style}>This is done using inline css</p>
       </div>
    );
}

let ComponentOne = FunctionalComponent;

export default ComponentOne;