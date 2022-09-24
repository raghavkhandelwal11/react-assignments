import React from "react";



class ButtonOne extends React.Component {


    tog() {
        let element = document.getElementById("comp1");
        if(element.style.visibility == "visible") {
            element.style.visibility = "hidden";
            return;
        }

        element.style.visibility = "visible";
        return;

    }


    render() {

        return (
            <button id="bt1" onClick={() => this.tog()}>To see styling in functional component</button>
        );
    }
}

export default ButtonOne;