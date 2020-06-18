import React from 'react';
import {Line} from 'react-chartjs-2';

export default class App extends React.Component {
  render() {
    return (
      this.props.graphDataState && <div>
        <Line
          data={this.props.graphDataState}
          options={{
            title:{
              display:true,
              text:'ID vs VOTES',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}