import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";

const Title = () => ( 
    <a href='/'>
    <img className='h-20 p-2' src='https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj' alt='logo'></img>
    </a>
)

const Header = () => {
  const [isLoggedin,setIsLoggedIn] = useState(false);
  const {user} = userContext;

    return (
    <div className='flex justify-between bg-pink-100 shadow-md'>
    <Title/>
    <div className='nav-item'>
      <ul className="flex py-10">
          <li className='px-2'> <Link to="/">Home</Link></li>
          <li className='px-2'><Link to="/about">About</Link></li>
          <li className='px-2'><Link to="/contact">Contact</Link></li>
          <li className='px-2'>Cart</li>
          <li className='px-2'><Link to="/instamart">Instamart</Link></li>
          <li className='px-2'>{user.name}</li>
        </ul>
        
        
    </div>
      
      </div>
    )
  }
  export default Header;