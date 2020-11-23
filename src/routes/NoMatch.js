import React from 'react'
import { Link } from 'react-router-dom'
import autoBind from 'react-autobind'

class NoMatch extends React.Component {
  constructor (props) {
    super(props)
    autoBind(this)
  }

  render () {
    return (
      <div>
        <h1 className='header-title'>Page not found</h1>
        <h3>No match for <code>{this.props.location.pathname}</code></h3>
        <p>Try <Link className='link' to='/'>here</Link></p>
      </div>
    )
  }
}

export default NoMatch
