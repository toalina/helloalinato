import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

class MediaDetails extends React.Component {
  render () {
    return (
      <div className='media-details'>
        <h1 className='header-title'>Media</h1>
        <div className='media-details-text'>
          <p>Alina has collaborated with a wide range of artists over the years. She has toured with and appeared on many TV and stage performances and recordings, including Sir Mix-A-Lot, ODESZA, Macklemore, Fleet Foxes, Perfume Genius, Duff McKagan, Judy Collins, Pedro the Lion, and more. Below are a few samples of her work.</p>
        </div>
        <ul>
          <li>Jump to:</li>
          <li>
            <Link to='#videos' className='link'>Videos</Link>
          </li>
          <li>
            <Link to='#audio' className='link'>Audio</Link>
          </li>
        </ul>
        <section className='media-section'>
          <div className='video-section-wrapper' name='videos' id='videos'>
            <h2>Videos</h2>
            <div className='media-container'>
              <div className='video-container'>
                <iframe title='Perfume Genius Sings His Love on W Records' width='320' height='180' src='https://www.youtube.com/embed/JdTpamdB_Nk?start=141' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
              </div>
              <h3>Perfume Genius Sings His Love on W Records</h3>
              <h5>Recorded December 2018</h5>
            </div>
            <div className='media-container'>
              <div className='video-container'>
                <iframe title='Amanda Palmer, Jherek Bischoff & Usman Riaz "Space Oddity" at TED2016' src='https://embed.ted.com/talks/lang/en/amanda_palmer_jherek_bischoff_usman_riaz_space_oddity' width='320' height='180' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
              </div>
              <h3>Amanda Palmer, Jherek Bischoff & Usman Riaz "Space Oddity" at TED2016</h3>
              <h5>Recorded February 2016</h5>
            </div>
          </div>

          <div className='media-container'>
            <div className='video-container'>
              <iframe title='Laura Gibson KEXP In-Studio Performance' width='320' height='180' src='https://www.youtube.com/embed/cZSKNnxgseI?start=1059' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
            </div>
            <h3>Laura Gibson KEXP In-Studio Performance</h3>
            <h5>Recorded December 2018</h5>
          </div>
          <div className='media-container'>
            <div className='video-container'>
              <iframe title='ODESZA KEXP In-Studio Performance' width='320' height='180' src='https://www.youtube.com/embed/aGVU_1Udhrs' frameBorder='0' scrolling='no' allowFullScreen />
            </div>
            <h3>ODESZA KEXP In-Studio Performance</h3>
            <h5>Recorded September 2017</h5>
          </div>
          <div className='audio-section-wrapper' name='audio' id='audio'>
            <h2>Audio</h2>
            <div className='media-container'>
              <div className='spotify-container'>
                <iframe title='Fleet Foxes - Bedouin Dress' src='https://open.spotify.com/embed/track/2hCeyomux4cPBYNriygKUS' width='300' height='380' frameBorder='0' allowtransparency='true' allow='encrypted-media' />
              </div>
              <h3>Fleet Foxes</h3>
              <h5>"Bedouin Dress" from "Helplessness Blues"</h5>
            </div>
            <div className='media-container'>
              <div className='spotify-container'>
                <iframe title='David Bazan & The Passenger String Quartet - When They Really Get To Know You' src='https://open.spotify.com/embed/track/2akdPrX2XebnK3hLuLPICc' width='300' height='380' frameBorder='0' allowtransparency='true' allow='encrypted-media' />
              </div>
              <h3>David Bazan & The Passenger String Quartet</h3>
              <h5>"When They Really Get To Know You" from "Volume 1"</h5>
            </div>
            <div className='media-container'>
              <div className='spotify-container'>
                <iframe title='Jherek Bischoff - Cistern' src='https://open.spotify.com/embed/track/4tMU9USBCh3hrLYQF0UYUY' width='300' height='380' frameBorder='0' allowtransparency='true' allow='encrypted-media' />
              </div>
              <h3>Jherek Bischoff</h3>
              <h5>"Cistern" from "Cistern"</h5>
            </div>
            <div className='media-container'>
              <div className='video-container'>
                <iframe title='Reynolds KITCHENS™ Quick Cut™ Plastic Wrap' width='320' height='180' src='https://www.youtube.com/embed/f2nQjyebcuA' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
              </div>
              <h3>Reynolds KITCHENS™ Quick Cut™ Plastic Wrap</h3>
              <h5>Commercial Soundtrack</h5>
            </div>
            <div className='media-container'>
              <div className='video-container'>
                <iframe title='The Storytellers Behind Apple TV+' width='320' height='180' src='https://www.youtube.com/embed/RrdbT4hpwBk' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
              </div>
              <h3>The Storytellers Behind Apple TV+</h3>
              <h5>Commercial Soundtrack</h5>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default MediaDetails
