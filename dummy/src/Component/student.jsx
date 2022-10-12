//import './style.css';
import Home from './home';
import { Link } from 'react-router-dom';
// import React, { Component } from 'react';
import Addnewstudent from './addnewstudent';
import React from 'react';
class Student extends React.Component {
      render(){
         const {formData} = this.props;
         let rows = []
         if(formData){
           for(var i=0; i<formData.length;i++){
            rows.push(<tr><td>{formData[i].Name}</td><td>{formData[i].Age}</td><td>{formData[i].Course}</td> <td>{formData[i].batch}<td></td></td></tr>)
            }
    return(
    <div >
         <Home />
       <span>STUDENT DETAILS:</span>
       <Link to="./addnewstudent/"><button id="Addnewstudent">Add New Student</button></Link>
       <center>
      <div id="tablepart" >
      <table  width="100%">
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Bctch</th>
                <th>Change</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td> <Link to="./addnewstudent/">edit</Link> </td>
            </tr>
            {rows}
        </table>
      </div>
       </center>
    </div>
    )
    }


    return(
      <div>
      <Home />
      <span>STUDENT DETAILS:</span>
      <Link to="./addnewstudent/"><button id="Addnewstudent">Add New Student</button></Link>
      <center>
     <div id="tablepart" >
     <table  width="100%">
           <tr>
               <th>Name</th>
               <th>Age</th>
               <th>Course</th>
               <th>Bctch</th>
               <th>Change</th>
           </tr>
       </table>
     </div>
      </center>
   </div>
    );
}
}
export default Student;