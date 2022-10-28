import React, { Component } from 'react'

export class LifeCycles extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("the component was mounted");
    }

    componentDidUpdate() {
        console.log("component just got updated!");
    }

    componentWillUnmount() {
        console.log("component is gonna be deleted");
    }
  render() {
    return (
      <div>

        <div>the passed value is : {this.props.val}</div>

      </div>
    )
  }
}

export default LifeCycles;