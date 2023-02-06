import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => ( 
    <a href='/'>
    <img className='logo' src='https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj' alt='logo'></img>
    </a>
)

const Header = () => {
  const [isLoggedin,setIsLoggedIn] = useState(false);

    return (
    <div className='header'>
    <Title/>
    <div className='nav-items'>
      <ul>
          <li> <Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <li><Link to="/instamart">Instamart</Link></li>
        </ul>
        {
          (isLoggedin ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button>)
        }
        
    </div>
      
      </div>
    )
  }
  export default Header;