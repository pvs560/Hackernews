import React from 'react';
import TimeAgo from 'timeago-react';

export default class HackerNewsTable extends React.Component {
  constructor() {
    super();
  }
  getDomainName = (url) => {
    return url ? url.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0] : "";
  }

  constRowList = () => {
    return this.props.hackerNewsData.map(data => (<tr className="d-flex">
      <td className="col-1">{data.num_comments}</td>
      <td className="col-1">{data.points}</td>
      <td className="votearrow col-1 cursor" title="upvote" onClick={()=>{this.props.updateVotes(data.objectID)}}></td>
      <td className="col-9 text-left">
        <span>
          <b>{data.title} </b>
          ({this.getDomainName(data.url)})
          by <b>{data.author} </b>
          <TimeAgo
            datetime={data.created_at}
            locale='en_US'
          />
          <span className="cursor">[ hide ]</span>
        </span></td>
    </tr>));
  }

  render() {

    return <div class="table-responsive-sm table-responsive-md table-responsive-xl">
      <table class="table table-striped">
        <thead>
          <tr className="d-flex header-bgcolor">
            <th className="col-1">Comments</th>
            <th className="col-1">VoteCount</th>
            <th className="col-1">UpVote</th>
            <th className="col-9 text-left">New Details</th>
          </tr>
        </thead>
        <tbody>
          {this.props.hackerNewsData !== null && this.constRowList()}
        </tbody>
      </table>
    </div>

  }
}