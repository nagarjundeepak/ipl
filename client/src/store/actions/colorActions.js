export const setColor = value => {
  return {
    type: 'SET_COLOR',
    value,
  };
};

export const setTeam = team => {
  return {
    type: 'SET_TEAM',
    team,
  };
};
