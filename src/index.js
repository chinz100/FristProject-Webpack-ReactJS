/*
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
ReactDOM.render(<App />, document.getElementById('root'))
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
//import Routes from './routes';
import Routes from './routes';


//import './index.css';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
  ); 



