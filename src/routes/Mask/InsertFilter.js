import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const InsertFilter = props => (
  <div className='mask-details-section-wrapper' id='use'>
    <h2>How to Insert Filter</h2>
    <div className='mask-image'>
      <img src='../masks/mask_filter.jpg' alt='Mask opening for filter' />
      <p>Mask Opening For Filter</p>
    </div>
    <div className='mask-details-text-wrapper'>
      <p><em>I like the opening in the middle because it is easier to reach all sides of the filter pocket to ensure the filter is covering nose and mouth areas.</em></p>
      <p>The most important point is to make sure the filter is inside the mask and covers the nose and mouth areas of the mask. </p>
      <p>Insert the filter from the opening slit. The side with the opening is to be worn touching your face. </p>
      <p>See <Link to='#filters' className='link'>Filter Recommendations</Link> section below.</p>
    </div>

  </div>
)

export default InsertFilter