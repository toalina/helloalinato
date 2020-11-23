import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'

class AboutDetails extends React.Component {
  render () {
    return (
      <div className='about-details'>
        <div className='about-header'>
          <h1 className='header-title'>About</h1>
        </div>
        <div className='about-feature-wrapper'>
          <div className='about-feature-image'>
            <img src='../violin-bob-scoverski.jpg' alt='Alina at Fremont Abbey, by Bob Scoverski' />
            <p>Photo by Bob Scoverski</p>
          </div>
          <div className='about-feature-text'>
            <p>
              Professional musician with over 20 years of experience on violin, studio recording and live performances. As a classically trained violinist, Alina has expanded her expertise across jazz, rock, pop, hip hop, experimental, and folk. She is well-versed across multiple genres and performs both acoustically and amplified (with a dialed-in pedalboard). See available <Link to='#services' className='link'>services</Link> below.
            </p>
            <p>P.S. Are you looking for <Link to='/etc' className='link'>Alina</Link>, the lady who is selling <Link to='/shop' className='link'>Alinagami Face Masks</Link>?</p>
          </div>
        </div>
        <section className='about-list'>
          <h2>Notable Clients & Collaborators:</h2>
          <ul>
            <li>The Who</li>
            <li>Perfume Genius</li>
            <li>Sir Mix-A-Lot</li>
            <li>Josh Groban</li>
            <li>Macklemore</li>
            <li>Fleet Foxes</li>
            <li>ODESZA</li>
            <li>Father John Misty</li>
            <li>Laura Gibson</li>
            <li>Symphony Tacoma</li>
            <li>Leon Bridges</li>
            <li>Wayne Horvitz</li>
            <li>Jherek Bischoff</li>
            <li>Ryuichi Sakamoto</li>
            <li>Duff McKagan</li>
            <li>Built to Spill</li>
            <li>Pedro the Lion </li>
            <li>Judy Collins</li>
            <li>DJ Spooky & Joshua Roman</li>
            <li>Tomo Nakayama</li>
            <li>Passenger String Quartet</li>
            <li>Jeremy Enigk (of Sunny Day Real Estate)</li>
            <li>Amanda Palmer</li>
            <li>Mirah</li>
            <li>Pickwick</li>
            <li>Seattle Music Inc.</li>
            <li>Ahamefule Oluo</li>
            <li>Erik Blood</li>
            <li>Phil Ek</li>
            <li>Jack Endino</li>
            <li>Martin Feveyear </li>
            <li>Christopher Colbert</li>
            <li>Game of Thrones</li>
            <li>Trans Siberian Orchestra</li>
            <li>Scrape</li>
            <li>NOCCO (North Corner Chamber Orchestra)</li>
          </ul>
          <h2 name='services' id='services'>Hire Alina for:</h2>
          <ul>
            <li>Touring and live performances</li>
            <li>Recording sessions</li>
            <li>Music videos</li>
            <li>Commercial / television appearances</li>
            <li>Pit orchestra</li>
            <li>Weddings</li>
            <li>Private events / parties</li>
            <li>DJ and producer collaborations</li>
            <li>Contracting musicians</li>
          </ul>
        </section>

        <p><Link to='/contact'><i class='far fa-envelope fa-2x' /></Link></p>

        <p>Did you know Alina is also a <br /><NavLink className='link' to='/tech'>software developer</NavLink>?</p>
      </div>
    )
  }
}

export default AboutDetails
