import { FETCH_WEATHER } from '../actions/index';

const initialState = [];

export default function (state = initialState,action){
    switch(action.type){
        
        case FETCH_WEATHER:
            console.log("action.type : ",action.type);
            console.log("action : " ,action);
            return [action.data, ...state];

        default:
            return state;
            
    }

} 