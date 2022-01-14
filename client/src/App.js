//! ALL RED COMMENTED SECTIONS ARE PLACES WHERE POTENTIAL CHANGES ARE NEEDED BASED UPON YOUR APPLICATION

import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // MUST IMPORT BrowserRouter (changing name to just Router is optional) and Route and Switch
import Home from './views/Home.js';
import Roster from './views/Hockey/Roster.js';
import NewPlayer from './views//Hockey/NewPlayer.js';
import Navbar from './components/Navbar.js';
import ShowPlayer from './views/Hockey/ShowPlayer.js';
import EditPlayer from './views/Hockey/EditPlayer.js';
import News from './views/News.js';
import Video from './views/Video.js';
import Stats from './views/Stats.js';
import Scores from './views/Scores.js';
import Standings from './views/Hockey/Standings.js';
import Shop from './views/Shop.js';
//! Update where it says players for whatever fits your application
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {/* //? INDEX ROUTE - SHOW ALL PLAYERS */}
          <Route exact path="/hockeyPlayers">
            <Roster />
          </Route>

          {/* //? CREATE ROUTE - NEW PLAYER */}
          <Route exact path="/hockeyPlayers/new">
            <NewPlayer />
          </Route>

          {/* //? EDIT ROUTE - EDIT INDIVIDUAL PLAYER */}
          <Route exact path="/hockeyPlayers/edit/:id">
            <EditPlayer />
          </Route>

          {/* //? SHOW ROUTE - INDIVIDUAL PLAYER */}
          <Route exact path="/hockeyPlayers/:id">
            <ShowPlayer />
          </Route>

          {/* //? NEWS PAGE */}
          <Route exact path="/news">
            <News />
          </Route>

          {/* //? VIDEO PAGE */}
          <Route exact path="/video">
            <Video />
          </Route>

          {/* //? STATS PAGE */}
          <Route exact path="/stats">
            <Stats />
          </Route>

          {/* //? SCORES PAGE */}
          <Route exact path="/scores">
            <Scores />
          </Route>

          {/* //? STANDINGS PAGE */}
          <Route exact path="/standings">
            <Standings />
          </Route>

          {/* //? SHOP PAGE */}
          <Route exact path="/shop">
            <Shop />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
