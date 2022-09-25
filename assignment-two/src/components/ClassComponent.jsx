import React from 'react';
// import Enteries from './Enteries';


class ClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list : [],
            show: false
        }
    }
    

    updateData = () => {
        this.setState({show : true});
        let n = document.getElementById("bt1").value;
        let d = document.getElementById("bt2").value;
        let r = document.getElementById("bt3").value;

        this.setState(state => ({list : [...state.list, [n, d, r]]}));
        
    }

    update = (c) => {
        if(c) {

            let ele = [];
            for(let i = 0; i < this.state.list.length; i++) {
                ele.push(<p>Name: {this.state.list[i][0]} | Department: {this.state.list[i][1]} | Rating: {this.state.list[i][2]}</p>)
            }

            return ele;
        }

        return null;
        
    }

    
    render() {


        return (
            <div>
                <label htmlFor="bt1">Name: </label>
                <input type="text" id="bt1" /> <br />
                <label htmlFor="bt2">Department: </label>
                <input type="text" id="bt2" /> <br />
                <label htmlFor="bt3">Rating: </label>
                <input type="text" id="bt3"/> <br />
                <button onClick={this.updateData}>Submit</button>
                <div className='bottomBox'>
                    {this.update(this.state.show)}
                </div>
            </div>
        );
    }
}

export default ClassComponent;