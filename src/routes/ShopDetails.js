import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

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
            {/*
            <h6>For additional shipping options, please visit my <a href="https://www.etsy.com/shop/AlinaSew" target="_blank" rel="noopener noreferrer" class="shop-link">[Etsy Shop]</a>.</h6>
          */}

          </div>

          <div className='shop-details-section-wrapper' id='features'>
            <h2>Mask Features</h2>
            <div class="feature-row-wrapper">
              <div class="shop-image feature-image">
                <img src='../masks/gray_dots_ties.jpg' alt='Gray dots mask with ties' />
                <p>Mask with ties</p>
              </div>
              <div class="shop-image feature-image">
                <img src='../masks/gray_dots_ties_inside.jpg' alt='Gray dots mask with ties inside' />
                <p>Mask with ties inside</p>
              </div>
              <div class="shop-image feature-image">
                <img src='../masks/gray_dots_filter.jpg' alt='Gray dots mask filter opening' />
                <p>Filter opening</p>
              </div>
              <div class="shop-image feature-image">
                <img src='../masks/gray_dots_loops.jpg' alt='Gray dots mask with ear loops' />
                <p>Mask with ear loops</p>
              </div>
              <div class="shop-image feature-image">
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

          <div className='shop-details-section-wrapper' id='how-to-order'>
            <h2>How to Order</h2>
            <div className='how-to-order-text-wrapper'>
              <h5>Option A</h5>
              <h6>Send Alina an email to <a href='mailto:alina.to@gmail.com?subject=Alinagami Mask Order (from helloalinato.com/shop)' target='_blank' rel='noopener noreferrer' class='shop-link'>[alina.to@gmail.com]</a> with the following info:</h6>

              <ul className='shop-details-list'>
                <li><strong>Fabric Name</strong>: See <Link to='#gallery' className='link'>[Gallery]</Link></li>
                <li><strong>Wear Preference</strong>: Ear Loops // Ties</li>
                <li><strong>Delivery Method</strong>: Mail // Pick Up</li>
                <li><strong>Address</strong> (if by Mail)</li>
                <li><strong>Number of Mask(s)</strong></li>
                <li><strong>Payment Method (Optional)</strong>: Your Venmo or PayPal username/email to receive payment request for quicker transaction</li>

              </ul>
              <h5>Option B</h5>
              <h6>You can also send a direct message to <a href="https://www.instagram.com/alinasew" target="_blank" rel="noopener noreferrer" class="shop-link">[@alinasew]</a> on Instagram to order.</h6>
            </div>
          </div>

          <div className='shop-details-section-wrapper' id='gallery'>
            <h2>Gallery</h2>
            <div className="shop-details-text-wrapper">
              <p>
                <strong>[11-19-2020] These are currently available mask fabrics.</strong>
                <br/>
                Follow <a href="https://www.instagram.com/alinasew" target="_blank" rel="noopener noreferrer" class="shop-link">[@alinasew]</a> on Instagram for new mask fabrics and volumes announcements.
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
        </section>
      </div>
    )
  }
}

export default ShopDetails
