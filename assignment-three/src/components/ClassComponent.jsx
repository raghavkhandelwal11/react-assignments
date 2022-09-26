import React from 'react';
import Enteries from './Enteries';


class ClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list : [],
            show: true
        }

    }

    

    updateData = () => {
        
        let n = document.getElementById("bt1").value;
        let d = document.getElementById("bt2").value;
        let r = document.getElementById("bt3").value;

        this.setState(state => ({list : [...state.list, [n, d, r]]}));

        this.setState({show : false});
        
    }

    showSecondPage = (bool) => {
        if(bool) {
            document.getElementById("first-page").style.display = "none";
            document.getElementById("second-page").style.display = "block"; 

            return (
                <div>
                    <Enteries list={this.state.list} />
                </div>
            );
        }

        return null;
    }

    backToFirstPage = () => {
        this.setState({show: true});
        document.getElementById("first-page").style.display = "block";
        document.getElementById("second-page").style.display = "none"; 
    }

 
    render() {


        return (
            <div>
                <div id='first-page'>
                <h1 id='heading-one'>EMPLOYEE FEEDBACK FORM</h1>
                    <label htmlFor="bt1">Name: </label>
                    <input type="text" placeholder='full name' id="bt1" /> <br />
                    <label htmlFor="bt2">Department: </label>
                    <input type="text" id="bt2" /> <br />
                    <label htmlFor="bt3">Rating: </label>
                    <input type="text" placeholder='rate out of 5' id="bt3"/> <br />
                    <button onClick={this.updateData}>Submit</button>
                    {/* <div className='bottomBox'>
                        {this.update(this.state.show)}
                    </div> */}
                </div>

                <div id='second-page'>
                    {this.showSecondPage(!this.state.show)}
                </div>

            </div>
        );
    }
}

export default ClassComponent;