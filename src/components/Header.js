import './Header.css'
import {GiFilmSpool as Film} from 'react-icons/gi'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
        <div className='container'>
          <Link to='/'>
            <div className='logotype'>
              <Film className='icon-logo'/>
              <h1>React Tutorial</h1>
            </div>
          </Link>
          <nav>
            <ul>
              <li><NavLink to='/' end>Home</NavLink></li>
              <li><NavLink to='/contact' end>Hooks</NavLink></li>
              <li><NavLink to='/sign-up' end>SignUp</NavLink></li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default Header