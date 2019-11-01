const counterReducer = (state =0, action) =>{
    switch(action.type){
        case 'ONE':
        return state + 1;
        case 'TEN' :
            return state + 10;
        case 'MINUSONE' :
            return state -1;
        case 'MINUSTEN' :
            return state -10;
        case'RESET' :
        return state = 0;
    } 
    return state
}

export default counterReducer