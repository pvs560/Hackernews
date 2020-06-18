import actionTypes from "./actionTypes";
export const getHackerNewdata = () =>{
    return (dispatch) =>{
        fetch("test.json",
        {
        method: "GET",
        headers:{
        "Access-Control-Allow-Origin": "*",    
        "Content-Type":"application/json"
        } 
       })
       .then(res => res.json())
       .then(res => {
          console.log("responsedata::",res);
          dispatch({
              type:actionTypes.SET_HACKER_NEWS_DATA,
              payload:{
                hackerNewsData:res.hits
            }
          })
          dispatch(setGraphData(res.hits));
       })
       .catch(error =>{
           console.log("failed to fetch Data",error);
       })
    }
}

export const setGraphData = (HNewsList)=>{
  let graphData = HNewsList.reduce((ac,data)=>{
     ac.label.push(data.objectID);
     ac.votes.push(data.points);
     return ac;
  },{label:[],votes:[]});
  console.log("graphData::",graphData);
  let graphDataState = {
    labels: graphData.label,
    datasets: [
    {
    label: 'Votes',
    fill: false,
    lineTension: 0.5,
    backgroundColor: 'rgba(75,192,192,1)',
    borderColor: 'rgba(0,0,0,1)',
    borderWidth: 2,
    data: graphData.votes
    }
    ]
}
  return {
      type:actionTypes.SET_GRAPH_DATA,
      payload:{
        graphDataState
      }
  }
}