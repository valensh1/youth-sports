import { Link } from 'react-router-dom';

function Navbar({teamID}) {
  console.log(teamID);


 
  
  return (
    <div className="navbar" id={teamID}>
      <div className="ul-container">
        <ul className="navbar--ul" >
          <li>
            {/* Place Logo here */}
            <Link to="/" className="navbar--ul-link" id={teamID} >
              <svg class="icon icon-home3">
                <use xlinkHref="./sprite.svg#icon-home3"></use>
              </svg>
            </Link>
          </li>

          <li>
            <Link to="/hockeyPlayers" className="navbar--ul-link" id={teamID}>
              Players
            </Link>
          </li>

          <li>
            <Link to="/news" className="navbar--ul-link" id={teamID}>
              News
            </Link>
          </li>

          <li>
            <Link to="/video" className="navbar--ul-link" id={teamID}>
              Video
            </Link>
          </li>

          <li>
            <Link to="/stats" className="navbar--ul-link" id={teamID}>
              Stats
            </Link>
          </li>

          <li>
            <Link to="/scores" className="navbar--ul-link" id={teamID}>
              Scores
            </Link>
          </li>

          <li>
            <Link to="/standings" className="navbar--ul-link" id={teamID}>
              Standings
            </Link>
          </li>

          <li>
            <Link to="/shop" className="navbar--ul-link" id={teamID}>
              Shop
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
