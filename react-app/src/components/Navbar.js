import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <div className='bar'>
      <Link className='link' to='/home'>Home</Link>
      <Link className='link' to='/about'>About</Link>
    </div>
  );
}

export default Navbar;
