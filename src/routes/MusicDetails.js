import React from 'react'
import { Link } from 'react-router-dom'

class MusicDetails extends React.Component {
  render () {
    return (
      <div className='music-details'>
        <div className='music-header'>
          <h1 className='header-title'>The Violinist</h1>
        </div>
        <p>Professional musician with over 20 years of experience on violin, studio recording and live performances. See available services below.</p>
        <section>
          <h2>Notable Clients & Collaborators:</h2>
          <ul>
            <li>Fleet Foxes</li>
            <li>ODESZA</li>
            <li>Perfume Genius</li>
            <li>Father John Misty</li>
            <li>Macklemore</li>
            <li>Jherek Bischoff</li>
            <li>Judy Collins</li>
            <li>Amanda Palmer</li>
            <li>Mirah</li>
            <li>Ryuichi Sakamoto</li>
            <li>Built to Spill</li>
            <li>Pedro the Lion </li>
            <li>DJ Spooky & Joshua Roman</li>
            <li>Jeremy Enigk (of Sunny Day Real Estate)</li>
            <li>Pickwick</li>
            <li>Trans Siberian Orchestra</li>
            <li>Game of Thrones</li>
          </ul>
          <h2>Associated Groups:</h2>
          <ul>
            <li>Symphony Tacoma</li>
            <li>Scrape</li>
            <li>Jeremy Enigk</li>
            <li>Tomo Nakayama</li>
            <li>Passenger String Quartet</li>
            <li>NOCCO (North Corner Chamber Orchestra)</li>
            <li>Grand Hallway</li>
            <li>Trans Siberian Orchestra</li>
            <li>Game of Thrones</li>
            <li>Seattle Music Inc.</li>
          </ul>

          <h2>Available for hire on violin for musical events including:</h2>
          <ul>
            <li>Weddings</li>
            <li>Private events / parties</li>
            <li>Pit orchestra</li>
            <li>Commercial / television appearances</li>
            <li>Music videos</li>
            <li>Live performances</li>
            <li>Studio sessions</li>
            <li>DJ and producer collaborations</li>
            <li>Contracting musicians</li>
          </ul>
        </section>

        <p><Link to='/contact'><i class='far fa-envelope fa-2x' /></Link></p>

        <section class='media-section'>
          <h2>Media</h2>
          <div class='media-container'>
            <div class='video-container'>
              <iframe title='ODESZA KEXP in-studio performance' width='854' height='480' src='https://www.youtube.com/embed/aGVU_1Udhrs' frameborder='0' scrolling='no' allowfullscreen />
            </div>
            <h3>ODESZA KEXP In-Studio Performance</h3>
            <h4>Recorded September, 2017</h4>
          </div>
          <div class='media-container'>
            <div class='video-container'>
              <iframe title='Amanda Palmer Jherek Bischoff Usman Riaz' src='https://embed.ted.com/talks/lang/en/amanda_palmer_jherek_bischoff_usman_riaz_space_oddity' width='854' height='480' frameborder='0' scrolling='no' allowfullscreen />
            </div>
            <h3>Amanda Palmer, Jherek Bischoff & Usman Riaz "Space Oddity" at TED2016</h3>
            <h4>Recorded February, 2016</h4>
          </div>

          <div class='media-container'>
            <div class='spotify-container'>
              <iframe title='Fleet Foxes - Bedouin Dress' src='https://open.spotify.com/embed/track/2hCeyomux4cPBYNriygKUS' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media' />
            </div>
            <h3>Fleet Foxes</h3>
            <h4>"Bedouin Dress" from "Helplessness Blues"</h4>
          </div>

          <div class='media-container'>
            <div class='spotify-container'>
              <iframe title='Jherek Bischoff - Cistern' src='https://open.spotify.com/embed/track/4tMU9USBCh3hrLYQF0UYUY' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media' />
            </div>
            <h3>Jherek Bischoff</h3>
            <h4>"Cistern" from "Cistern"</h4>
          </div>
        </section>

        <Link to='/'>Top</Link>
      </div>
    )
  }
}

export default MusicDetails
