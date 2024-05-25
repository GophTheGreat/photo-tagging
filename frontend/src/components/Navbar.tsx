import { Link } from 'react-router-dom'

function Navbar() {

  return(
    <div className = 'navbar'>
      <ul className = 'navElementWrapper'>
        <li className='navElement'>
          <div className="dropdownNav">
            <div className="dropTextNav">Levels &#9660;</div>
            <ul className='levels'>
              <li className='levelLinkWrapper'><Link className='levelLink' to='/play/default'>Level 1</Link></li>
              <li className='levelLinkWrapper'><Link className='levelLink' to='/play/level2'>Level 2</Link></li>
              <li className='levelLinkWrapper'><Link className='levelLink' to='/play/level3'>Level 3</Link></li>
            </ul>
          </div>
        </li>
        <li className="navElement"><Link to='/scoreboard'>Scoreboard</Link></li>
        <li className="navElement">dummy</li>
      </ul>
    </div>
  )
}

export default Navbar;