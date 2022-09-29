import './App.css';

import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";

import Students from './components/Students';

import ContactUs from './components/ContactUs';

import Navbar from './components/Navbar';

import Add from "./components/Add"

import Edit from './components/Edit';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      students : []
    } 
  }

  updateStudents = (s) => {
      this.setState({student: s});
  }

  editStudent = (n, a, c, b, ind) => {
    let arr = this.state.students;

    // arr[ind][0] = n;
    // arr[ind][1] = a;
    // arr[ind][2] = c;
    // arr[ind][3] = b;

    if(n != "") {
      arr[ind][0] = n;
    }
    if(a != "") {
      arr[ind][1] =  a;
    }
    if(c != "") {
      arr[ind][2] =  c;
    }
    if(b != "") {
      arr[ind][3] =  b;
    }

    this.setState({student: arr});
    }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students stud={this.state.students}/>} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/students/add" element={<Add stud={this.state.students} method={this.updateStudent}/>}/>
            <Route path="students/edit" element={<Edit stud={this.state.students} edit={this.editStudent}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
  
}

export default App;
