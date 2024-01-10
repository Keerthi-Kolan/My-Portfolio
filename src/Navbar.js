import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Keerthi Kolan</h1>
            <div className="links">
                <Link to="/">About</Link>
                <Link to="/Projects.js">Projects</Link>
                <Link to="/Education.js">Education</Link>
                <Link to="/Contact.js">Contact</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;