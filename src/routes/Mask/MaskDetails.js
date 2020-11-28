import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import FilterRecs from './FilterRecs'
import HowToWash from './HowToWash'
import HowToWear from './HowToWear'
import InsertFilter from './InsertFilter'
import MaskMaterials from './MaskMaterials'

class MaskDetails extends React.Component {
  render () {
    return (
      <div className='mask-details'>
        <h1 className='header-title'>Alinagami Mask</h1>
        <h1 className='header-title'>Instructions for Wear and Care</h1>
        <div className='mask-details-intro'>
          <div className='mask-image'>
            <img src='../masks/gray_dots_ties_knot.jpg' alt='Gray dots mask with ties' />
            <p>Mask With Ties</p>
          </div>
          <p>
            Hello! This face mask features a pocket for inserting a filter, removable nose and chin wires, and adjustable ear loop straps (Remember those cool hemp necklaces in the 90s?) or a tie on cotton cord.
          </p>
          <p>
            After receiving the mask, please hand wash and iron at home before inserting nose and/or chin wire(s) for use. Using the mask with a filter will greatly increase the filtration efficiency of the mask. See <Link to='#use' className='link'>How to Wash the Mask</Link> and <Link to='#filters' className='link'>Filter Recommendations</Link> sections for more details.
          </p>
          <p>Let me know if you have any questions. Stay safe and healthy!</p>
          <p>Alina</p>
          <p>P.S. Are you looking to buy a mask? <Link to='/shop' className='mask-link'>[Over here!]</Link></p>
        </div>
        <ul id='mask-menu'>
          <li>Jump to:</li>
          <li>
            <Link to='#features' className='link'>Mask Features</Link>
          </li>
          <li>
            <Link to='#materials' className='link'>Materials</Link>
          </li>
          <li>
            <Link to='#use' className='link'>How to Insert Filter</Link>
          </li>
          <li>
            <Link to='#wear' className='link'>How to Wear the Mask</Link>
          </li>
          <li>
            <Link to='#wash' className='link'>How to Wash the Mask</Link>
          </li>
          <li>
            <Link to='#filters' className='link'>Filter Recommendations</Link>
          </li>
        </ul>
        <section className='mask-section'>
          <div className='mask-details-section-wrapper' id='features'>
            <h2>Mask Features</h2>
            <ul>
              <li>100% cotton, double layer, prewashed.</li>
              <li>Removable nose and chin wires. </li>
              <li>Ear loops or ties options.</li>
              <li>Easy access pocket for filter.</li>
              <li>Many ways to wear. </li>
              <li>Machine washable.</li>
            </ul>
          </div>
          <MaskMaterials />
          <InsertFilter />
          <HowToWear />
          <HowToWash />
          <FilterRecs />
        </section>
      </div>
    )
  }
}

export default MaskDetails
