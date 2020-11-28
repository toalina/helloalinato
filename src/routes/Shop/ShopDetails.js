import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import ShopGallery from './ShopGallery'
import HowToOrder from './HowToOrder'
import MaskFeatures from './MaskFeatures'

class ShopDetails extends React.Component {
  render () {
    return (
      <div className='shop-details'>
        <h1 className='header-title'>Shop</h1>
        <div className='shop-details-intro'>
          <div className='shop-intro-image'>
            <img src='../masks/yellow_gingham_ties.jpg' alt='Yellow gingham mask with ties' />
          </div>
          <p>Wear a mask. Add a filter. COVID-19 doesn't care who you are.</p>
        </div>
        <ul id='shop-menu'>
          <li>Jump to:</li>
          <li>
            <Link to='#features' className='link'>Mask Features</Link>
          </li>
          <li>
            <Link to='#how-to-order' className='link'>How to Order</Link>
          </li>
          <li>
            <Link to='#gallery' className='link'>Gallery</Link>
          </li>
        </ul>

        <section className='shop-section'>
          <div className='shop-details-section-wrapper' id='intro'>
            <h2>Alinagami Mask</h2>
            <div className='mask-prices'>
              <h4>$20 / mask</h4>
              <h5>+ shipping by mail (calculated after order confirmation)</h5>
              <h5>+ $0 for local pick up (Seattle Capitol Hill neighborhood)</h5>
              <h6>Venmo and PayPal ("Friends and Family" Payment Type!) accepted. </h6>
              <p>All masks are final sale and may not be returned or exchanged.</p>
            </div>
          </div>
          <MaskFeatures /> 
          <HowToOrder />
          <ShopGallery />
        </section>
      </div>
    )
  }
}

export default ShopDetails
