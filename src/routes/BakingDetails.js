import React from 'react'

class BakingDetails extends React.Component {
  render () {
    return (
      <div className='baking-details'>
        <h1 className='header-title'>The Baker</h1>
        <video autoplay muted loop playsinline poster='https://media.giphy.com/media/3MdWDmRBns6MgKaAer/giphy.gif'>
          <source src='../assets/alina-chewing.mp4' type='video/mp4' />
        </video>
        <p>Yes, you can absolutely commission projects with Alina!</p>
        <p>Visit <a href='https://www.instagram.com/alinadough/' target='_blank' rel='noopener noreferrer' className='link'>@alinadough Instagram</a> and follow <a href='https://www.instagram.com/explore/tags/alinadough/' target='_blank' rel='noopener noreferrer' className='link'>#alinadough</a> for more info</p>
      </div>
    )
  }
}

export default BakingDetails
