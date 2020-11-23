import React from 'react'

class SewingDetails extends React.Component {
  render () {
    return (
      <div className='sewing-details'>
        <h1 className='header-title'>The Seamstress</h1>
        <p>Blurb about Alina's sewing background, how she got into it, can commission her to make stuff</p>
        <p>Gallery view (look up in Foundation UI)</p>
        <p>Work In Progress!</p>
        <p>Yes, you can absolutely commission projects with Alina!</p>

        <div class='card'>
          <img class='card-img' src='https://placehold.it/350x300' alt='header' />
          <div class='card-info'>
            <h1 class='card-title'>Card Title</h1>
            <div class='card-icon'>6</div>
            <p class='card-author'>Author Name</p>
            <p class='card-stats'>6 <img src='https://placehold.it/20' alt='hi' /> 6 <img src='https://placehold.it/20' alt='hi' /></p>
          </div>
        </div>
      </div>
    )
  }
}

export default SewingDetails
