//import './style.css'
import { Link } from 'react-router-dom';
const Home=()=>
{
    return(
       <header>
         <div id="flex">
        <Link to="./"><div id="flex-items"> HOME</div></Link>
         <Link to="./student"><div id="flex-items"> STUDENTS</div></Link>
        <Link to="./contactus"><div id="flex-items">CONTACT US</div></Link>
        </div>
       </header>
    )
}
export default Home;