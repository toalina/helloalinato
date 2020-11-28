import React from 'react'

const FilterRecs = props => (
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
)

export default FilterRecs