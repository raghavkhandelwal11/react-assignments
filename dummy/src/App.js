import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from"./Component/home";
import Student from "./Component/student";
import Contactus from "./Component/contactus";
//import "./Component/style.css";
import Addnewstudent from "./Component/addnewstudent";
function App() {
  return(
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus/" element={<Contactus />} />
      <Route path="/student" element={<Student />}/>
      <Route path="/student/addnewstudent" element={<Addnewstudent />}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;