// Task 2.1 Implement Navigation Links
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return(
        <nav>
            <NavLink to='/' activeClassName="active">Home</NavLink>
            <NavLink to='/comics/' activeClassName="active">Comics</NavLink>
            <NavLink to='/browse-characters/' activeClassName="active">Browse Characters</NavLink>
        </nav>
    )
}
export default NavBar;