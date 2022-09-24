import React from "react";
import "./comp2.css"



class ButtonTwo extends React.Component {


    tog() {
        let element = document.getElementById("comp2");
        if(element.style.visibility == "visible") {
            element.style.visibility = "hidden";
            return;
        }

        element.style.visibility = "visible";
        return;

    }

    render() {

        return (
            <button id ="bt2" onClick={this.tog}>To see styling in functional component</button>
        );
    }
}

export default ButtonTwo;