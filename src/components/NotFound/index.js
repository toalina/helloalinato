// src/components/NotFound/index.js
import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.scss';

export default class NotFound extends React.Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('NotFound', className)} {...props}>
        <h1>
          404 <small>Not Found :(</small>
        </h1>
      </div>
    );
  }
}
