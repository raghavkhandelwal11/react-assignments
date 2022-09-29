import React from 'react';
import { Link } from 'react-router-dom';
class ClassComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            name:'',
            depart:'',
            rate:'',
            arr:[],
            showName:false
        }
    }

    handleName = (event) =>{
        this.setState({name:event.target.value})
    }
    handleDepartment = (event) =>{
        this.setState({depart:event.target.value})
    }
    handleRating = (event) =>{
        this.setState({rate:event.target.value})
    }
    handleShowName = () =>{
        const updateArray = this.props.users;
        updateArray.push({name:this.state.name,depart:this.state.depart,rate:this.state.rate})
       this.setState({showName: true,arr:updateArray})
    }

render(){
    return(
        <div>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <form action="">
            <label htmlFor="">NAME:</label>
        <input type="text"  value={this.state.name} onChange={this.handleName}/> <br/> <br />
        <label htmlFor="">DEPARTMENT:</label>
        <input type="text"  value={this.state.depart} onChange={this.handleDepartment}/> <br /><br />
        <label htmlFor="">RATING:</label>
        <input type="text"  value={this.state.rate} onChange={this.handleRating}/> <br /><br />
        <Link to="/ClassComponent2"> <button onClick={this.handleShowName}>SUBMIT</button></Link>
            </form>
       
       </div> 
        
    )
 }
}

export default ClassComponent;