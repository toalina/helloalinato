// src/components/App/index.js
import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.scss';

class App extends React.Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <h2>Welcome</h2>
        </div>
        <ul>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/'>Home</Link></li>
        </ul>
        <div className='content-wrapper'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App;
