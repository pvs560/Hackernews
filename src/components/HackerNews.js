import React from 'react';
import HackerNewsTable from './HackerNewsTable';
import HackerNewsGraph from './HackerNewsGraph';

export default class HackerNews extends React.Component {
    constructor(){
    super();
    }

    componentDidMount(){
        this.props.actions.getHackerNewdata();
    }

     render(){
         return <>
         <HackerNewsTable hackerNewsData={this.props.hackerNewsData} updateVotes={this.props.actions.updateVotes}/>
         <HackerNewsGraph graphDataState={this.props.graphDataState}/>
         </>
     }
}