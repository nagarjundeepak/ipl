// import axios from 'axios';
import { SET_MATCHES } from "../actions/types";

const venues = ["Select","Hyderabad",
"Pune",
"Rajkot",
"Indore",
"Bangalore",
"Mumbai",
"Kolkata",
"Delhi",
"Chandigarh",
"Kanpur",
"Jaipur",
"Chennai",
"Cape Town",
"Port Elizabeth",
"Durban",
"Centurion",
"East London",
"Johannesburg",
"Kimberley",
"Bloemfontein",
"Ahmedabad",
"Cuttack",
"Nagpur",
"Dharamsala",
"Kochi",
"Visakhapatnam",
"Raipur",
"Ranchi",
"Abu Dhabi",
"Sharjah",
"Mohali",
"Bengaluru"];
const years = [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019];
const teams =[{tid:null,name:'Select'},{tid:'1001',name:'Sunrisers Hyderabad'},
{tid:'1002',name:'Mumbai Indians'},
{tid:'1003',name:'Gujarat Lions'},
{tid:'1004',name:'Rising Pune Supergiant'},
{tid:'1005',name:'Royal Challengers Bangalore'},
{tid:'1006',name:'Kolkata Knight Riders'},
{tid:'1007',name:'Delhi Daredevils'},
{tid:'1008',name:'Delhi Capitals'},
{tid:'1009',name:'Kings XI Punjab'},
{tid:'1010',name:'Rajasthan Royals'},
{tid:'1011',name:'Deccan Chargers'},
{tid:'1012',name:'Chennai Super Kings'},
{tid:'1013',name:'Kochi Tuskers Kerala'},
{tid:'1014',name:'Rising Pune Supergiants'},
{tid:'1015',name:'Pune Warriors'},]


/* const getData = async () => {
    let result = await axios.get (
      `/api/matches`
    );
    return result.data.data
};

getData(); */

const initState = {
    venues: venues,
    teams: teams,
    years: years,
    matches: []
};

const match = (state=initState,action)=>{
    switch(action.type){
        case 'FETCH_DATA':          
            return state;
        case SET_MATCHES:
            return {...state,matches:action.payload}       
        default:         
            return state;
    }
}

export default match;