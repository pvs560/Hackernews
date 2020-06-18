import {createReducer} from "../utils/Utils";
import actionTypes from "./actionTypes";

const initialState = {
    "hackerNewsData": null,
    "graphDataState":null,
}

let HackerNewsReducer = createReducer(initialState,{
    [actionTypes.SET_HACKER_NEWS_DATA]:(state,payload)=>{
        return {...state,...payload};
    },
    [actionTypes.SET_GRAPH_DATA]:(state,payload)=>{
        return {...state,...payload}
    }
});

export default HackerNewsReducer;