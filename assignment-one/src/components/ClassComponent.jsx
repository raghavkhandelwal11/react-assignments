import react from "react";
import './comp2.css';

class ClassComponent extends react.Component {
    render() {
        return (
            <div id={this.props.id}>
                <h1>This is created using class component</h1>
                <p>This is done using external css</p>
                <p style={this.props.style}>This is done using inline css</p>
            </div>
       );
    }
}

export default ClassComponent;