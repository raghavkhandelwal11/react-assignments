import React from "react";


class PureComponent extends React.PureComponent {

    
    constructor(props) {
        super(props);
        this.state = {
            firstCount: 0
        }
    }

    updateFirstCount = () => {
        this.setState({firstCount: this.state.firstCount+1});
    }

    render() {
        return (
            <div>
                <p>This is an example of pure component where it updates by comparing previous primitive props values but not any other non-primitive values</p>

                <ul>
                    <li>If you click on first button only the left count will increase "because it repesents inner functionality"</li>
                    <li>If you click on the second button nothing happens because we are trying to pass handler to the pure component so it will not change</li>
                </ul>

                <p>firstCount: {this.state.firstCount}</p>
                <p>secondCount: {this.props.handleFirstCount}</p>

                <button className="btn btn-success" onClick={this.updateFirstCount}>First button</button>

            </div>
        );
    }
}

export default PureComponent;