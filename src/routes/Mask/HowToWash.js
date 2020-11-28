import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const HowToWash = props => (
  <div className='mask-details-section-wrapper' id='wash'>
    <h2>How to Wash the Mask</h2>
    <div className='mask-image'>
      <img src='../masks/mask_wire.jpg' alt='Mask wire channel' />
      <p>Mask Wire Channel</p>
    </div>
    <div className='mask-details-text-wrapper'>
      <p><em>I like to hand wash because it doesn’t scrunch up as much as in the washing machine, and it’s less work to iron it out.</em></p>
      <h4>Steps:</h4>
      <p>Remove wire.</p>
      <p>Turn the mask inside out, so the filter opening side is facing outward. </p>

      <p><strong>For mask with ties</strong>: Tie the cords together before throwing into the washing machine. </p>

      <h4>Hand Wash:</h4>
      <p>Wash by hand in warm soapy water. Hang dry. If possible, dry in the warmest spot in your home. </p>

      <h4>Machine Wash:</h4>
      <p>Machine wash cold/warm. Hang dry.</p>

      <h4>Iron:</h4>
      <p>Apply hot steamy iron for additional sanitization. A good way to reach curved parts of the mask is to use a rolled up towel and put the mask up against it.</p>
      <h4>Wire:</h4>
      <p>Wash by hand and air dry separately.</p>
    </div>
  </div>
)

export default HowToWash