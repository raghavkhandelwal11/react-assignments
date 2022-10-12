import React from "react";

const newComponent = WrappedComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState({ count: this.state.count +1 });
        }

        render() {
            return(
                <>
                    <WrappedComponent count={this.state.count} method={this.incrementCount}></WrappedComponent>
                </>
            );
        }
    }
    return NewComponent;
}

export default newComponent;