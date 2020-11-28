import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const HowToWear = props => (
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
)

export default HowToWear