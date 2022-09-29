import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClassComponent from "./components/ClassComponent";
// import "./components/style.css";
import ClassComponent2 from "./components/ClassComponent2";


class App extends React.Component{
  constructor(){
    super();
    this.state = {
        arr:[],
    }
} 
  updateUsers=(updatedUsers)=>{
    this.setState({arr:updatedUsers})
  }
  render(){
  return ( 
   <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element = {<ClassComponent users = {this.state.arr} updateUsers = {this.updateUsers}/>}/>
    <Route path='/classComponent2' element = {<ClassComponent2 users = {this.state.arr} />}/>
    </Routes>
    </BrowserRouter>
  
   
    </div>
  );
}
}

export default App;