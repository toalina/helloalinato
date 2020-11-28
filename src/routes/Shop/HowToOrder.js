import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const HowToOrder = props => (
  <div className='shop-details-section-wrapper' id='how-to-order'>
    <h2>How to Order</h2>
    <div className='how-to-order-text-wrapper'>
      <h5>Option A</h5>
      <h6>Send Alina an email to <a href='mailto:alina.to@gmail.com?subject=Alinagami Mask Order (from helloalinato.com/shop)' target='_blank' rel='noopener noreferrer' className='shop-link'>[alina.to@gmail.com]</a> with the following info:</h6>

      <ul className='shop-details-list'>
        <li><strong>Fabric Name</strong>: See <Link to='#gallery' className='link'>[Gallery]</Link></li>
        <li><strong>Wear Preference</strong>: Ear Loops // Ties</li>
        <li><strong>Delivery Method</strong>: Mail // Pick Up</li>
        <li><strong>Address</strong> (if by Mail)</li>
        <li><strong>Number of Mask(s)</strong></li>
        <li><strong>Payment Method (Optional)</strong>: Your Venmo or PayPal username/email to receive payment request for quicker transaction</li>

      </ul>
      <h5>Option B</h5>
      <h6>You can also send a direct message to <a href="https://www.instagram.com/alinasew" target="_blank" rel="noopener noreferrer" className="shop-link">[@alinasew]</a> on Instagram to order.</h6>
    </div>
  </div>
)

export default HowToOrder