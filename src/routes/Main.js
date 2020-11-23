import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import AboutDetails from './AboutDetails'
import MediaDetails from './MediaDetails'
import EtcDetails from './EtcDetails'
import TechDetails from './TechDetails'
import BakingDetails from './BakingDetails'
import SewingDetails from './SewingDetails'
import MaskDetails from './MaskDetails'
import ShopDetails from './ShopDetails'
import ContactDetails from './ContactDetails'
import NoMatch from './NoMatch'

class Main extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <main className='content-wrapper'>
        <div>

          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route path='/about' component={AboutDetails} />
            <Route path='/media' component={MediaDetails} />
            <Route path='/etc' component={EtcDetails} />
            <Route path='/tech' component={TechDetails} />
            <Route path='/baking' component={BakingDetails} />
            <Route path='/sewing' component={SewingDetails} />
            <Route path='/mask' component={MaskDetails} />
            <Route path='/shop' component={ShopDetails} />
            <Route path='/contact' component={ContactDetails} />
            {/* when none of the above match, <NoMatch> will be rendered */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </main>
    )
  }
}

export default Main
