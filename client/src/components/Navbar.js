//! ALL RED COMMENTED SECTIONS ARE PLACES WHERE POTENTIAL CHANGES ARE NEEDED BASED UPON YOUR APPLICATION

import { Link } from 'react-router-dom';

//! Change navbar link names and actual links below to fit your application. For example, change "/news" to "/teams" and change the News navbar heading to Teams
function Navbar() {
  return (
    <div className="navbar">
      <div className="ul-container">
        <ul className="navbar--ul">
          <li>
            {/* Place Logo here */}
            <Link to="/" className="navbar--ul-link">
              <svg class="icon icon-home3">
                <use xlinkHref="./sprite.svg#icon-home3"></use>
              </svg>
            </Link>
          </li>
          <li>
            <Link to="/hockeyPlayers" className="navbar--ul-link">
              Players
            </Link>
          </li>
          <li>
            <Link to="/news" className="navbar--ul-link">
              News
            </Link>
          </li>
          <li>
            <Link to="/video" className="navbar--ul-link">
              Video
            </Link>
          </li>
          <li>
            <Link to="/stats" className="navbar--ul-link">
              Stats
            </Link>
          </li>
          <li>
            <Link to="/fantasy" className="navbar--ul-link">
              Scores
            </Link>
          </li>
          <li>
            <Link to="/shop" className="navbar--ul-link">
              Shop
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
