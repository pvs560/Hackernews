import React from 'react';

export default class HackerNewsTable extends React.Component {
    constructor(){
     super();
    }
    getDomainName = (url) =>{
        return url?url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0]:"";
    }
    constRowList = () => {
    return this.props.hackerNewsData.map(data => (<tr className="d-flex">
                                 <td className="col-2">{data.num_comments}</td>
                                 <td className="col-2">{data.points}</td>
                                 <td className="votearrow col-2" title="upvote"></td>
                                 <td className="col-6">
                                     <span>
                                         <b>{data.title} </b>
                                         ({this.getDomainName(data.url)})
                                          by <b>{data.author} </b>
                                          5 hours ago <span>[ hide ]</span>
                                     </span></td>
                                </tr>));
    }

    render(){

   return  <div class="table-responsive-sm table-responsive-md table-responsive-xl">
    <table class="table table-striped">
        <thead>
          <tr className="d-flex">
            <th className="col-2">Comments</th>
            <th className="col-2">VoteCount</th>
            <th className="col-2">UpVote</th>
            <th className="col-6">New Details</th>
          </tr>
        </thead>
        <tbody>
         {this.props.hackerNewsData !== null && this.constRowList()}   
        </tbody>    
    </table>
    </div>

    }
}