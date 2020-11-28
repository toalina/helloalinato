import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const MaskFeatures = props => (
  <div className='shop-details-section-wrapper' id='features'>
    <h2>Mask Features</h2>
    <div className="feature-row-wrapper">
      <div className="shop-image feature-image">
        <img src='../masks/gray_dots_ties.jpg' alt='Gray dots mask with ties' />
        <p>Mask with ties</p>
      </div>
      <div className="shop-image feature-image">
        <img src='../masks/gray_dots_ties_inside.jpg' alt='Gray dots mask with ties inside' />
        <p>Mask with ties inside</p>
      </div>
      <div className="shop-image feature-image">
        <img src='../masks/gray_dots_filter.jpg' alt='Gray dots mask filter opening' />
        <p>Filter opening</p>
      </div>
      <div className="shop-image feature-image">
        <img src='../masks/gray_dots_loops.jpg' alt='Gray dots mask with ear loops' />
        <p>Mask with ear loops</p>
      </div>
      <div className="shop-image feature-image">
        <img src='../masks/gray_dots_loops_closeup.jpg' alt='Gray dots mask with loops close up' />
        <p>Adjustable ear loops</p>
      </div>
    </div>

    <h6>See <Link to='#gallery' className='link'>[Gallery]</Link> for available mask fabrics.</h6>

    <ul className='shop-details-list'>
      <li>Reusable, non-medical face mask.</li>
      <li>Extra tall and wide protective coverage.</li>
      <li>Thoughtful pattern design for glasses wearers.</li>
      <li>High quality and precise handmade construction.</li>
      <li>Made to Order.</li>
      <br/>
      <li>100% cotton, washed and pressed.</li>
      <li>Easy access pocket for filter.</li>
      <li>Double-layered construction.</li>
      <li>3D shape for comfort between nose and mouth.</li>
      <li>Adjustable [Ear Loops] or [Ties] (Made to Order)</li>
      <li>Removable nose and chin wires.</li>
      <li>Machine washable.</li>
      <li><Link to='/mask' className='shop-link'>[Instructions]</Link> for wear and care and filter recommendations.</li>
      <li>Eyeglasses and somewhat yawn friendly. (Yes, I tested yawning, enoughspace for a 50% yawn. If you are yawning at 100%, you should probably go home and take a nap.)</li>
      <br/>
      <li>Every seam finished and pressed for long time use.</li>
      <li>Solo workshop <span role='img' aria-label='strong arm emoji'>💪</span></li>
    </ul>
  </div>
)

export default MaskFeatures