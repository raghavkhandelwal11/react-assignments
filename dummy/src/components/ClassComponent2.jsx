import { Link } from "react-router-dom";
import React from "react";


class classComponent2 extends React.Component{
   render(){
    return(
       <div>
        <p id="outerbox">
         {this.props.users.map(item =>{
         return(
          <p id="innerbox">Name :{item.name} | Department : {item.depart} | Rating :{item.rate}</p>
            )
         })
        }
        </p>
       <p>
         <Link to="/"><button> GO-BACK</button></Link>
       </p>
       </div>
    )
   }
}
export default classComponent2;