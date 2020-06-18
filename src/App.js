import React from 'react';
import { Provider } from 'react-redux';
import {Routes} from "./Routes";
import store from './CreateStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
       <Provider store={store}>
        <Routes/>
        </Provider>
    </div>
  );
}

export default App;
