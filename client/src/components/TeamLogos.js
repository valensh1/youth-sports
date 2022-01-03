import { useState, useEffect } from 'react';

//? DISPLAYS TEAM LOGOS
function TeamLogos({ team, logo }) {
  const [teamLogo, setTeamLogo] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const flaggedTeams = /Ducks|Kings/gi; // Regular Expressions / RegEx --> Multiple Ducks and Kings teams that are called Ducks(1), Kings (2) for example and if that's the case we just want to extract the Team Name without the corresponding number associated with the team because all the Ducks teams use the same logo and all the Kings teams use the same logo.
        const matchedFlagTeam = team.match(flaggedTeams); // If the destructured team prop passed from parent contains either Ducks or Kings teams then this will return an array such as ['Kings'] or ['Ducks']
        const teamToSearchForLogo = matchedFlagTeam ? matchedFlagTeam[0] : team; // If matchedFlagTeam finds a team name with either Kings or Ducks in it then return either Kings or Ducks otherwise return the the team name of the other teams NOT NAMED Kings or Ducks

        // Loops through each of the teams data from the teams data collection (logo props passed down) and if that matches the teamToSearchForLogo variable we computed above then set useState to that teams logo to be used in JSX below.
        logo.forEach((el) => {
          if (el.teamNameShort === teamToSearchForLogo) {
            setTeamLogo(el.logo);
          }
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  console.log(teamLogo);

  return (
    <div>
      {/* <img src={`./img/Team-Logos/Hockey/${teamLogo}`} alt="" /> */}
      <img src={teamLogo} alt={team} />
      {/* <img src="https://i.imgur.com/DgIwxpm.png" alt="" /> */}
    </div>
  );
}

export default TeamLogos;
