import React from 'react';
import {connect} from 'react-redux';
import FliterBar from './fliterBar';

function Landing (props) {
  const {isAuthenticated, user} = props.auth;
  const img = props.colorTeam.img;
  const styles = {backgroundImage: `url(${img})`, backgroundSize: 'contain'};
  return (
    <div className="landing mt-3" style={styles}>
      <div className="container mb-3">
        Welcome
        <span style={{fontWeight: 'bold'}}>
          {isAuthenticated ? ` ${user.username} ` : ' Guest '}
        </span>
        to IPL Match Tracker
      </div>
      <FliterBar />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect (mapStateToProps) (Landing);
