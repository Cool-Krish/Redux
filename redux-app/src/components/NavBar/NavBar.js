
import './style.css'
import { Link } from 'react-router-dom';
function Navbar(prop){

    return<>
    <div className="nav">
        <div className="logo">
            <img src={prop.image} alt="" />
            <h2>My App</h2>
        </div>
        <div className="menu">
            <Link to='/' className="submenu">HOME</Link>
            <Link to = 'contact' className="submenu">Contact</Link>
            <Link to='service' className="submenu">Service</Link>
            <Link className="submenu">about</Link>
        </div>

    </div>

    
    </>
}
export default Navbar;