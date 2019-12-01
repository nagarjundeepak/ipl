import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {getMatches} from '../../../store/actions/matchActions';
import MatchList from './matchList';

function FliterBar (props) {
  const [team,setTeam] = useState(null);
  const [year,setYear] = useState(2008);
  const [venue,setVenue] = useState(null);
  const {teams,years,venues,matches} = props.match;
  useEffect(()=>{
    props.getData();
  },[]);
  let res = matches.data;
  const teamList = teams.map(team=>{
  return(<option key={team.tid} value={team.name}>{team.name}</option>)
  });
  const yearList = years.map(year=>{
    return(<option key={year} value={year}>{year}</option>)
  });
    const venueList = venues.map(venue=>{
     return(<option key={venue} value={venue}>{venue}</option>)
   });
  return (
    <div className='container'>    
    <div className="fliterBar mt-3">      
      <div className="row mt-3 mb-3">
        <div className='col'>
          <label className='label mr-2'>By Team</label>
          <select className='form-control-sm' onChange={(e)=>setTeam(e.target.value)}>
            {teamList}
          </select>
        </div>
        <div className='col'>
          <label className='label mr-2'>By Year</label>
          <select className='form-control-sm' onChange={(e)=>setYear(e.target.value)}>
            {yearList}
          </select>
        </div>
        <div className='col'>
        <label className='label mr-2'>By Venue</label>
          <select className='form-control-sm' onChange={(e)=>setVenue(e.target.value)}>
            {venueList}
          </select>
        </div>
      </div>
    </div>
      <MatchList data={res} query={{team,year,venue}}/>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch=>{
  return {
    getData: ()=>{
      return dispatch(getMatches())
    }
  }
}

export default connect (mapStateToProps,mapDispatchToProps) (FliterBar);