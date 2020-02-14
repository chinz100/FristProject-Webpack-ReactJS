import React, { PropTypes, Component } from 'react';
import { hot } from 'react-hot-loader'
import './style.css';
 
class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>404 : Not Found :(</h1>
      </div>
    )
  }
}
export default hot(module)(NotFound)
