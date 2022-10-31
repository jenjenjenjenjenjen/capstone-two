import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <ul className='navbar'>
            <li className='navLink'>
                <Link to='/'>Home</Link>
            </li>
            <li className='dropdown navLink'>
                <Link to='/marsrover' className='dropBtn'>Mars Rover Photos
                    <i className='fa fa-caret-down'></i>
                </Link>
                <div className='dropdownContent'>
                    <Link to='/marsrover/curiosity'>Curiosity</Link>
                    <Link to='/marsrover/spirit'>Spirit</Link>
                    <Link to='/marsrover/opportunity'>Opportunity</Link>
                    <Link to='/marsrover/perseverance'>Perseverance</Link>
                </div>
            </li>
            <li className='navLink'>
                <Link to='/epic'>Earth Photos</Link>
            </li>
            <li className='navLink'>
                <Link to='/marsweather'>Mars Weather</Link>
            </li>
            <li className='navLink'>
                <Link to='/eonet'>Earth Observatory Natural Event Tracker</Link>
            </li>
            <li className='navLink'>
                <Link to='/missions'>Mars Mission Manifests</Link>
            </li>
            <li className='navLink'>
                <Link to='/potd'>NASA's Astronomy Picture of the Day</Link>
            </li>
            <li className='navLink'>
                <Link to='/about'>About</Link>
            </li>
        </ul>
    )
}

export default Navbar;