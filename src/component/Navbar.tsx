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
            <a className="home" href="/home">Home</a>
          </div>
        </div>
      </nav>
   </header>
   
  )
}

export default Navbar