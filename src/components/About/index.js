// src/components/About/index.js
import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.scss';

export default class About extends React.Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <h1>
          About
        </h1>
      </div>
    );
  }
}
