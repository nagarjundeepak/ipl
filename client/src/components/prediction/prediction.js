import React, {useState} from 'react';
import {connect} from 'react-redux';

function Prediction (props) {
  const {isAuthenticated} = props.auth;
  if (!isAuthenticated) {
    props.history.push ('/');
  }
  const [team1, setTeam1] = useState (null);
  const [team2, setTeam2] = useState (null);
  const [venue, setVenue] = useState ('Select');
  const [toss, setToss] = useState (null);
  const [result, setResult] = useState ({
    aWin: 0,
    bWin: 0,
    venue: null,
  });
  const {teams, venues, matches} = props.match;
  const teamList = teams.map (team => {
    return <option key={team.tid} value={team.name}>{team.name}</option>;
  });
  const venueList = venues.map (venue => {
    return <option key={venue} value={venue}>{venue}</option>;
  });
  let arr = matches.data.matches;
  const handleClick = () => {
    let ans = helper (team1, team2, arr, venue, toss);
    setResult (ans);
  };

  return (
    <div className="container mt-3 mb-3">
      <div className="row mt-3 mb-3">
        <div className="col">
          Team 1: <select
            className="form-control"
            onChange={e => setTeam1 (e.target.value)}
          >
            {teamList}
          </select>
        </div>
        <div className="col">
          Team 2: <select
            className="form-control"
            onChange={e => setTeam2 (e.target.value)}
          >
            {teamList}
          </select>
        </div>
        <div className="col">
          Venue: <select
            className="form-control"
            onChange={e => setVenue (e.target.value)}
          >
            {venueList}
          </select>
        </div>
        <div className="col">
          Bats First: <select
            className="form-control"
            onChange={e => setToss (e.target.value)}
          >
            <option value={team1}>{team1}</option>
            <option value={team2}>{team2}</option>
          </select>
        </div>
        <div className="col" style={{marginTop: '20px'}}>
          <button onClick={handleClick} className="btn btn-warning">
            Submit
          </button>
        </div>
      </div>
      <div>
        <div className="contanier mt-3">
          <div className="row mt-5 mb-3"><h4>Winning Performance</h4></div>
          <div className="row text-center mt-3">
            <h4>
              {team1}{' - '}
              {result.aWin === 0 ? null : result.aWin}{' vs '}
              {team2}{' - '}
              {result.bWin === 0 ? null : result.bWin}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect (mapStateToProps) (Prediction);

function helper (a, b, data, city, toss) {
  if (city === 'Select') {
    alert ('no matches on this venue!');
    return {};
  }
  let win = [];
  let venue = [];
  toss === null ? (toss = a) : (toss = toss);
  for (let i = 0; i < data.length; i++) {
    if (data[i].team1 === a && data[i].team2 === b) {
      if (city === data[i].city && toss === data[i].toss_winner) {
        if (data[i].toss_decision === 'bat') {
          win.push (data[i].winner);
          venue.push (data[i].city);
        }
      }
    } else if (data[i].team1 === b && data[i].team2 === a) {
      if (city === data[i].city && toss === data[i].toss_winner) {
        if (data[i].toss_decision === 'bat') {
          win.push (data[i].winner);
          venue.push (data[i].city);
        }
      }
    }
  }

  let aCount = 0, bCount = 0;
  for (let j = 0; j < win.length; j++) {
    if (win[j] === a) {
      aCount++;
    } else if (win[j] === b) {
      bCount++;
    }
  }

  let tot = aCount + bCount;
  aCount = Math.round (aCount / tot * 100) + '%';
  bCount = Math.round (bCount / tot * 100) + '%';
  return {aWin: aCount, bWin: bCount, venues: venue};
}
