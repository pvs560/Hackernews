import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';
import HackerNews from "../components/HackerNews";

const mapStateToProps = (state)=>({
    hackerNewsData:state.hackerNewsData,
    graphDataState:state.graphDataState
})

const mapDispatchToProps = (dispatch)=>({
actions: bindActionCreators(Actions, dispatch)
})

const HackerNewsContainer = connect(mapStateToProps,mapDispatchToProps)(HackerNews);

export default HackerNewsContainer;
