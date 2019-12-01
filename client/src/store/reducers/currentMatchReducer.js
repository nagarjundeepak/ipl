const initState = {
    match:null
}

const currentMatch = (state=initState,action)=>{
    switch(action.type){
        case 'SET_MATCH':
            return{...state,match:action.data};
        default:
            return state;
    }
}

export default currentMatch;