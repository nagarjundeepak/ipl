const teams = [
  {tid: null, name: 'Select', code: 'black', img: ''},
  {
    tid: '1001',
    name: 'Sunrisers Hyderabad',
    code: 'orange',
    img: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sunrisers_Hyderabad.svg',
  },
  {
    tid: '1002',
    name: 'Mumbai Indians',
    code: 'blue',
    img: 'http://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png',
  },
  {
    tid: '1003',
    name: 'Gujarat Lions',
    code: 'orange',
    img: 'http://www.pngall.com/wp-content/uploads/2017/04/Gujarat-Lions-Logo-PNG.png',
  },
  {
    tid: '1004',
    name: 'Rising Pune Supergiant',
    code: 'purple',
    img: 'http://www.pngall.com/wp-content/uploads/2017/04/Rising-Pune-Supergiants-Logo-PNG.png',
  },
  {
    tid: '1005',
    name: 'Royal Challengers Bangalore',
    code: 'darkred',
    img: 'http://www.pngall.com/wp-content/uploads/2017/04/Royal-Challengers-Bangalore-Logo-PNG.png',
  },
  {
    tid: '1006',
    name: 'Kolkata Knight Riders',
    code: 'darkblue',
    img: 'http://www.pngall.com/wp-content/uploads/2017/04/Kolkata-Knight-Riders-Logo-PNG.png',
  },
  {
    tid: '1007',
    name: 'Delhi Daredevils',
    code: 'darkorange',
    img: 'http://www.pngall.com/wp-content/uploads/2017/04/Delhi-Daredevils-Logo-PNG.png',
  },
  {
    tid: '1008',
    name: 'Delhi Capitals',
    code: 'darkblue',
    img: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Delhi_Capitals_Logo.svg',
  },
  {
    tid: '1009',
    name: 'Kings XI Punjab',
    code: 'red',
    img: 'http://www.pngall.com/wp-content/uploads/2017/04/Kings-XI-Punjab-Logo-PNG.png',
  },
  {
    tid: '1010',
    name: 'Rajasthan Royals',
    code: 'pink',
    img: 'http://www.pngall.com/wp-content/uploads/2017/04/Rajasthan-Royals-Logo-PNG.png',
  },
  {
    tid: '1011',
    name: 'Deccan Chargers',
    code: 'darkblue',
    img: 'http://www.pngall.com/wp-content/uploads/2017/04/Deccan-Chargers-Logo-PNG.png',
  },
  {
    tid: '1012',
    name: 'Chennai Super Kings',
    code: 'yellow',
    img: 'http://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png',
  },
  {
    tid: '1013',
    name: 'Kochi Tuskers Kerala',
    code: 'green',
    img: 'https://upload.wikimedia.org/wikipedia/en/9/96/Kochi_Tuskers_Kerala_Logo.svg',
  },
  {
    tid: '1014',
    name: 'Rising Pune Supergiants',
    code: 'grey',
    img: 'http://www.pngall.com/wp-content/uploads/2017/04/Rising-Pune-Supergiants-Logo-PNG.png',
  },
  {
    tid: '1015',
    name: 'Pune Warriors',
    code: 'grey',
    img: 'http://www.pngall.com/wp-content/uploads/2017/04/Rising-Pune-Supergiants-Logo-PNG.png',
  },
];
const initState = {
  colorCode: '#333',
  fav: 'none',
  img: '',
};
// eslint-disable-next-line
const colorTeam = (state = initState, action) => {
  switch (action.type) {
    case 'SET_COLOR':
      let res = null;
      for (let i = 0; i < teams.length; i++) {
        if (teams[i].name === action.value) {
          res = teams[i].code;
        }
      }
      return {...state, colorCode: res};
    case 'SET_TEAM':
      let team = action.team;
      let imgSrc = null;
      for (let i = 0; i < teams.length; i++) {
        if (teams[i].name === action.team) {
          imgSrc = teams[i].img;
        }
      }
      if (action.team === 'Select') {
        team = 'None';
      }
      return {...state, fav: team, img: imgSrc};
    default:
      return state;
  }
};

export default colorTeam;
