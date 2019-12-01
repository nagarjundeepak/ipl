import React, {useState} from 'react';
import {connect} from 'react-redux';
import {setColor, setTeam} from '../../store/actions/colorActions';

function Dashboard (props) {
  const [team, setTeam] = useState (null);
  const {isAuthenticated, user} = props.auth;
  const {teams} = props.match;
  const {fav} = props.colorTeam;
  if (!isAuthenticated) {
    props.history.push ('/');
  }
  const teamList = teams.map (team => {
    return <option key={team.tid} value={team.name}>{team.name}</option>;
  });
  const handleSubmit = () => {
    props.onSetColor (team);
    props.onSetTeam (team);
  };
  return (
    <React.Fragment>
      <div className="container mt-3 mb-3">
        <div className="row mt-3 mb-3">
          {`hey ${user.username}`}
        </div>
        <div className="row mt-3 mb-3">
          <h5>Select your favourite IPL Team:</h5>
        </div>
        <div className="row">
          <select
            className="form-control col"
            onChange={e => setTeam (e.target.value)}
          >
            {teamList}
          </select>
          <div className="col-1" />
          <button className="btn btn-primary col-2" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <div className="row mt-3 mb-3">
          your current favourite IPL team is {fav === 'none' ? 'None' : fav}
        </div>
        <div className="row mt-3 mb-3">
          <img alt="logo" src={props.colorTeam.img} className="container" />
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onSetColor: val => {
      dispatch (setColor (val));
    },
    onSetTeam: team => {
      dispatch (setTeam (team));
    },
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (Dashboard);
