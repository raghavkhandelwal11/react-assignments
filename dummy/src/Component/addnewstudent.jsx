import Home from "./home";
import React, { Component } from 'react';
import Student from "./student";
class Addnewstudent extends Component {
    constructor(props){
    super(props);
    this.state = {
    Name: '',
    Age: '',
    Course:'',
    batch:'',
    formValid: false,
    formData: []
}
    this.changeName = this.changeName.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.changeCourse = this.changeCourse.bind(this);
    this.changebatch = this.changebatch.bind(this);
}
changeName(event){
   this.setState({
      Name: event.target.value
   })
}
changeAge(event){
    this.setState({
      Age: event.target.value
    })
}
changeCourse(event){
    this.setState({
      Course: event.target.value
    })
}
changebatch(event){
    this.setState({
      batch: event.target.value
    })
}
handleSubmit(e){
     e.preventDefault();
     if(this.state.Name !== "" && this.state.uPassword !== "" && this.state.Course !== ""  && this.state.batch !== "" && this.state.Name !== null && this.state.uPassword !== null && this.state.Course !== null && this.state.batch !== null){
         let object = {}
         object.Name = this.state.Name;
         object.Age = this.state.Age;
         object.Course=this.state.Course;
         object.batch=this.state.batch;
         this.setState({
            formValid: true,
            formData: object
          })
     }
}
renderTable(){
     <Student formData = {this.state.formData} />
}
  render(){
    return(
        <div>
       <Home />
       <div className="container">
           <form >
           <div className="items">
           <fieldset> <legend>  Name  </legend> <input type="text"  value = {this.state.Name} onChange={this.changeName}/></fieldset>
           </div>
           <div className="items"><fieldset><legend>Age </legend> <input type="text" value = {this.state.Age} onChange={this.changeAge} /></fieldset>
          </div>
           <div className="items"><fieldset><legend>Course </legend> <input type="text" value = {this.state.Course} onChange={this.changeCourse} /></fieldset>
           </div>
           <div className="items"><fieldset><legend>Batch </legend> <input type="text" value = {this.state.batch} onChange={this.changebatch} /></fieldset>
            </div>
           </form>
           {this.state.formValid ? this.renderTable() : ''}
       </div>
       <button id="cancelbtn">Cancel</button>
       <button id="updatebtn" onSubmit={this.handleSubmit}>Update</button>
   </div>
    )
    }
}
export default Addnewstudent;