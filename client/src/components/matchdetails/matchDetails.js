import React from 'react';
import {connect} from 'react-redux';

function MatchDetails (props) {
  const {match} = props.currentMatch;
  if (match === null) {
    props.history.push ('/');
  }
  return (
    <div className="container mt-3 mb-3 justify-content-center">
      <div className="row mb-3 mt-3">
        <h4><span className="badge badge-primary">Match Summary</span></h4>
      </div>
      <div className="row mb-3"><h4>{match.team1} Vs {match.team2}</h4></div>
      <div className="row mb-3">
        <span className="badge badge-dark">
          Venue: {match.venue},{match.city}
        </span>
        <span className="mr-2 badge badge-secondary">Date: {match.date}</span>
      </div>
      <div className="row mb-3">
        <h5>
          {match.winner}
          {' '}
          won by
          {' '}
          {Number (match.win_by_runs) !== 0
            ? `${match.win_by_runs} runs`
            : Number (match.win_by_wickets) !== 0
                ? `${match.win_by_wickets} wickets`
                : 'N/A'}
        </h5>
      </div>
      <div className="row mb-3 text-muted">
        Toss won by
        {' '}
        {match.toss_winner}
        {' '}
        team and choosed to
        {' '}
        {match.toss_decision}
        {' '}
        first
      </div>
      <div className="row mb-3">
        <h6>
          <span>Man of the Match: </span>
          <span className="badge badge-danger">{match.player_of_match}</span>
        </h6>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect (mapStateToProps) (MatchDetails);
