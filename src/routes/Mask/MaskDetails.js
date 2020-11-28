import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

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
          <div className='mask-details-section-wrapper' id='materials'>
            <h2>Materials</h2>
            <p><em>For reference if you need to replace.</em></p>

            <h4>Fabric</h4>
            <ul>
              <li>100% Cotton</li>
            </ul>

            <h4>Nose Wire</h4>
            <ul>
              <li>Fuzzy craft pipe cleaner.</li>
              <li><em>It’s the most comfortable of all the wires I’ve acquired and tried.</em></li>
              <li>Single wire folded in half, twisted, fold in raw end.</li>
              <li>Remove before washing mask.</li>
            </ul>

            <h4>Ear Loops</h4>
            <ul>
              <li>Elastic cord</li>
            </ul>

            <h4>Ties</h4>
            <ul>
              <li>100% cotton cord</li>
            </ul>
          </div>

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
          <div className='mask-details-section-wrapper' id='wear'>

            <h2>How to Wear the Mask</h2>
            <div className='mask-image'>
              <img src='../masks/gray_dots_loops.jpg' alt='Mask with adjustable ear loops' />
              <p>Mask With Adjustable Ear Loops</p>
            </div>
            <div className='mask-details-text-wrapper'>
              <p><em>I like to wear the mask with both nose and chin wires to create a tighter fit. However, you can also wear the mask without wires.</em></p>
              <h4>To wear without wires:</h4>
              <p>To create the shape and space for nose and mouth, fold the mask in half by lining up the short (ear) sides, pocket opening enclosed, iron a crease in the center where it goes from nose to chin.</p>
              <h4>Ear loops style:</h4>
              <p>To put on, adjust ear loops to comfortable length. See video for demo on how to adjust the ear loops <a href="https://youtu.be/zOFOxZqP93M" target="_blank" rel="noopener noreferrer" className="mask-link">[Link to YouTube video demo]</a>. Bend the nose bridge wire about 90 degrees before putting on for a better contour around the nose bridge.</p>
              <h4>Tie on style:</h4>
              <p>To put on, see video for demo <a href="https://youtu.be/gcDriEST600" target="_blank" rel="noopener noreferrer" className="mask-link">[Link to YouTube video demo]</a>. Bend nose bridge wire about 90 degrees before putting on for better contour around the nose bridge. To remove mask with ties, see video for demo <a href="https://youtu.be/xviP_loXFa0" target="_blank" rel="noopener noreferrer" className="mask-link">[Link to YouTube video demo]</a>.</p>

              <br/>

              <p><strong>While wearing</strong>, avoid touching the outside of the mask as this side is exposed to germs.</p>
              <p><strong>After returning home</strong>, wash your hands, carefully remove the mask, dispose of the filter, and thoroughly wash the mask.</p>
            </div>
          </div>

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

          <div className='mask-details-section-wrapper' id='filters'>
            <h2>Filter Recommendations</h2>
            <div className='mask-details-text-wrapper'>
              <p>
              Info adopted from <a href="https://diymask.site/" target="_blank" rel="noopener noreferrer" className="mask-link">[HK Mask]</a>.
              <br/>
              Visit <a href="https://diymask.site/" target="_blank" rel="noopener noreferrer" className="mask-link">[HK Mask]</a> for more details.
              </p>
              <ul>
                <li>
                  * Higher filtration efficiency = Better filtration effect
                </li>
                <li>
                  * Higher PD flow rate = More difficult to breathe
                </li>
                <li>
                  * Tissue paper = Tempo brand tissue paper (thicker than Kleenex brand)
                </li>
                <li>
                  * Kitchen paper = Paper towel
                </li>
              </ul>

              <img src='../masks/hkmask_filter1.jpg' alt='HK Mask Filter 1' />
              <img src='../masks/hkmask_filter2.jpg' alt='HK Mask Filter 2' />
            </div>

          </div>
        </section>

      </div>
    )
  }
}

export default MaskDetails
