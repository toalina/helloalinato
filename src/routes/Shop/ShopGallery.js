import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const ShopGallery = props => (
  <div className='shop-details-section-wrapper' id='gallery'>
    <h2>Gallery</h2>
    <div className="shop-details-text-wrapper">
        <p>
        <strong>Currently available mask fabrics.</strong>
        <br/>
        Follow <a href="https://www.instagram.com/alinasew" target="_blank" rel="noopener noreferrer" className="shop-link">[@alinasew]</a> on Instagram for new mask fabrics and volumes announcements.
        <br/>
        Please refer to <Link to='#how-to-order' className='shop-link'>[How to Order]</Link> to place an order. Thank you!
        </p>
    </div>
    <div className="gallery-row-wrapper">
      <div className='shop-image gallery-image'>
        <img src='../masks/camping_trip_ties.jpg' alt='Camping trip mask with ties' />
        <p>Camping Trip</p>
      </div>
      <div className='shop-image gallery-image'>
        <img src='../masks/camping_trip_ties_inside.jpg' alt='Camping trip mask filter' />
        <p>Camping Trip</p>
      </div>
      <div className='shop-image gallery-image'>
        <img src='../masks/magenta_matsuri.jpg' alt='Magenta matsuri mask' />
        <p>Magenta Matsuri</p>
      </div>
      <div className='shop-image gallery-image'>
        <img src='../masks/magenta_matsuri_filter.jpg' alt='Magenta matsuri  mask filter' />
        <p>Magenta Matsuri</p>
      </div>
      <div className='shop-image gallery-image'>
        <img src='../masks/gray_spots_ties.jpg' alt='Gray spots mask with ties' />
        <p>Gray Spots</p>
      </div>
      <div className='shop-image gallery-image'>
        <img src='../masks/gray_spots_filter.jpg' alt='Gray spots mask filter' />
        <p>Gray Spots</p>
      </div>
      <div className='shop-image gallery-image'>
        <img src='../masks/mint_mochi.jpg' alt='Mint mochi mask' />
        <p>Mint Mochi</p>
      </div>
      <div className='shop-image gallery-image'>
        <img src='../masks/mint_mochi_filter.jpg' alt='Mint mochi mask filter' />
        <p>Mint Mochi</p>
      </div>
    </div>
  </div>
)

export default ShopGallery