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
        let e1 = document.getElementById("bt1");
        let e2 = document.getElementById("bt2");
        let e3 = document.getElementById("bt3");

        let n = e1.value, d = e2.value, r = e1.value;
        this.setState(state => ({list : [...state.list, [n, d, r]]}));

        e1.value = ""; e2.value = ""; e3.value = "";
        
    }

    update = (c) => {
        if(c) {

            let ele = [];
            for(let i = 0; i < this.state.list.length; i++) {
                ele.push(<p key={i}>Name: {this.state.list[i][0]} | Department: {this.state.list[i][1]} | Rating: {this.state.list[i][2]}</p>)
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