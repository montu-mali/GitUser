import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import './navbar.css';

function Navbar() {
  return (
   
   <header>
      <nav>
        <div className="nav_container">
          <div className="images">
            <img  className="logo" src={logo} alt="logo" />
          </div>
                
          <div className="right">
            <Link className="home" to="/home">Home</Link>
          </div>
        </div>
      </nav>
   </header>
   
  )
}

export default Navbar