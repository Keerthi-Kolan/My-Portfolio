import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1><Link to="/">Keerthi Kolan</Link></h1>
            <div className="links">
                <Link to="/">About</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Education">Education</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;