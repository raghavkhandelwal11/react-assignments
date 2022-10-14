import React from 'react';
import {Link} from "react-router-dom"
import '../App.css'
import {BrowserRouter, Router, Route} from 'react-router-dom';
import Edit from './Edit';

class Students extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            stds : [],
            name: "",
            age: "",
            course: "",
            batch: "",
            show: false
        }
    }

    // show =() => {
    //     this.setState({show: true});
    // }

    showTable = (l) => {
        if(l == 0) {
            return null;
        }

        let ele = [];

        for(let i = 0; i < l; i++) {

            ele.push(<div className="fix-1">{this.props.stud[i][0]}</div>);
            ele.push(<div className="fix-1">{this.props.stud[i][1]}</div>);
            ele.push(<div className="fix-1">{this.props.stud[i][2]}</div>);
            ele.push(<div className="fix-1">{this.props.stud[i][3]}</div>);
            let par1 = this.props.stud[i][0], par2 = this.props.stud[i][1], par3 = this.props.stud[i][2], par4 = this.props.stud[i][3];

            ele.push(<div className="fix-1 ">

                <Link to={{
                pathname:"/students/edit",  
                search:`?n=${i}`
                }}>
                <p id="fix-2">edit</p> 
                </Link>

                </div>);

        }

        // <Link to={{pathname:"edit", search:`?name=${name}&derpat=${depart}&rate=${rate}`}} className="btn btn-primary">Submit</Link>

        return ele;
        
    }

    // editStudent = (n, a, c, b) => {
    //     return(
    //         <div>
    //             <Router>
    //                 <Route path="/students/edit" element={<Edit params={[n, a, c, b]} stud={this.props.stud} />}/>
    //             </Router>
    //             <Link to="/students/edit"><button onClick={}></button></Link>
    //         </div>
    //     );
    // }


    render() {
        return(
            <div>

        
                    <div id="student-header">
                        <div>
                            <h1 id="student-title">Student Details</h1>
                        </div>
                        <div>
                            <Link to="add"><button id="student-add">Add new Student</button></Link> 
                        </div>
                        {/* <button >show</button> */}

                        <div id="student-table">
                            <div className="fix-1"><strong>Name</strong> </div>
                            <div className="fix-1"><strong>Age</strong></div>
                            <div className="fix-1"><strong>Course</strong></div>
                            <div className="fix-1"><strong>Batch</strong></div>
                            <div className="fix-1"><strong>Change</strong></div>
                            
                            {this.showTable(this.props.stud.length)}
                        </div>
                    </div>

                
            </div>
        );
    }
}


export default Students;