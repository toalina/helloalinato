import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const MaskMaterials = props => (
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
)

export default MaskMaterials