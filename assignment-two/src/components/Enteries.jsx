import React from 'react';

class Enteries extends React.Component {

    

    render() {
        return(
            <p>Name: {this.props.name} | Department: {this.props.dept} | Rating: {this.props.rating}</p>
        );
    }
}

export default Enteries;