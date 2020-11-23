import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render () {
    return (
      <div className='home'>
        <div className='image-wrapper'>
          <img src='../violin-desk-sm.jpg' alt='Violin desk with Totoro' />
        </div>
        <h1 className='header-title shows-list-title'>
          Upcoming Shows?
        </h1>
        <p>COVID-19 is very real. Wear a <Link to='/shop' className='link pulse'>mask</Link>.</p>
        {/*
        <div>

          <section>
            <h1 className='header-title shows-list-title'>
              Upcoming Shows
            </h1>
            <div className='shows-list-container'>
              <div className='shows-list'>

                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>January 23, 2020 Thurs</h4>
                    <p className='show-text-link'><a href='https://www.eventbrite.com/e/hygge-party-with-ings-tomo-nakayama-sophia-duccini-fremont-abbey-tickets-79282655557' target='_blank' rel='noopener noreferrer'>Hygge Party w/ ings, Tomo Nakayama
                    <br />
                    Fremont Abbey (Seattle, WA)</a></p>
                  </div>
                </div>
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>February 13, 2020 Thurs 8PM</h4>
                    <p className='show-text-link'><a href='https://www.facebook.com/events/479052759449646/' target='_blank' rel='noopener noreferrer'>Scrape
                    <br />
                    Chapel Performance Space at Good Shepherd Center (Seattle, WA)</a></p>
                  </div>
                </div>
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>February 21, 2020 Fri</h4>
                    <p className='show-text-link'><a href='http://www.kaleylaneeaton.com/' target='_blank' rel='noopener noreferrer'>Kaley Eaton: Cornish Faculty Composer Concert
                    <br />
                    Cornish College of Arts (Seattle, WA)</a></p>
                  </div>
                </div>
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>February 22, 2020 Sat 2PM</h4>
                    <p className='show-text-link'><a href='https://www.nocco.org/20192020-season' target='_blank' rel='noopener noreferrer'>North Corner Chamber Orchestra
                    <br />
                    Youngstown Cultural Arts Center (Seattle, WA)</a></p>
                  </div>
                </div>
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>February 23, 2020 Sun 7:30PM</h4>
                    <p className='show-text-link'><a href='https://www.nocco.org/20192020-season' target='_blank' rel='noopener noreferrer'>North Corner Chamber Orchestra
                    <br />
                    Seattle Town Hall (Seattle, WA)</a></p>
                  </div>
                </div>
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>February 29, 2020 Sat</h4>
                    <p className='show-text-link'><a href='http://originarts.com/artists/artist.php?Artist_ID=180' target='_blank' rel='noopener noreferrer'>Chris Icasiano CD Release Show
                    <br />
                    Wing Luke Museum (Seattle, WA)</a></p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section>
            <h1 className='header-title shows-list-title'>
              Past Shows
            </h1>
            <div className='shows-list-container'>
              <div className='shows-list'>

                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>January 18, 2020 Sat</h4>
                    <p className='show-text-link'><a href='https://www.thecrocodile.com/e/dessa-with-string-quartet-75410311271/' target='_blank' rel='noopener noreferrer'>Dessa w/ String Quartet
                    <br />
                    The Crocodile (Seattle, WA)</a></p>
                  </div>
                </div>

                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>December 15, 2019 Sun (2PM)</h4>
                    <p className='show-text-link'><a href='http://npacf.org/the-nutcrackerupcoming-concerts-2' target='_blank' rel='noopener noreferrer'>The Nutcracker w/ Emerald Theatre Ballet Orchestra
                    <br />
                    Northshore Performing Arts Center (Bothell, WA)</a></p>
                  </div>
                </div>

                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>December 14, 2019 Sat (2PM)</h4>
                    <p className='show-text-link'><a href='http://npacf.org/the-nutcrackerupcoming-concerts-2' target='_blank' rel='noopener noreferrer'>The Nutcracker w/ Emerald Theatre Ballet Orchestra
                    <br />
                    Northshore Performing Arts Center (Bothell, WA)</a></p>
                  </div>
                </div>

                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>November 16, 2019 Sat</h4>
                    <p className='show-text-link'><a href='https://www.eventbrite.com/e/ings-album-release-ashley-eriksson-lake-guest-ballard-homestead-tickets-73881727235' target='_blank' rel='noopener noreferrer'>Ings Album Release Show
                    <br />
                    Ballard Homestead (Seattle, WA)</a></p>
                  </div>
                </div>
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>November 7, 2019 Thurs (6PM)</h4>
                    <p className='show-text-link'><a href='https://forterra.org/event/ampersand-live-2019' target='_blank' rel='noopener noreferrer'>Ampersand Live w/ Tomo Nakayama
                    <br />
                    The Moore Theater (Seattle, WA)</a></p>
                  </div>
                </div>
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>October 31, 2019 Thurs</h4>
                    <p className='show-text-link'><a href='https://www.theroyalroomseattle.com/' target='_blank' rel='noopener noreferrer'>Live Soundtrack to Silent Film: The Cabinet of Dr. Caligari
                    <br />
                    The Royal Room (Seattle, WA)</a></p>
                  </div>
                </div>

                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>October 19, 2019 Sat</h4>
                    <p className='show-text-link'><a href='https://www.thewho.com/tour/' target='_blank' rel='noopener noreferrer'>The Who
                    <br />
                    T-Mobile Park (Seattle, WA)</a></p>
                  </div>
                </div>

                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>August 25, 2019 Sun</h4>
                    <p className='show-text-link'><a href='https://www.joshgroban.com/tour' target='_blank' rel='noopener noreferrer'>Josh Groban
                    <br />
                    Chateau Ste Michelle Winery (Woodinville, WA)</a></p>
                  </div>
                </div>
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>August 24, 2019 Sat</h4>
                    <p className='show-text-link'><a href='https://www.joshgroban.com/tour' target='_blank' rel='noopener noreferrer'>Josh Groban
                  <br />
                  Chateau Ste Michelle Winery (Woodinville, WA)</a></p>
                  </div>
                </div>
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>August 22, 2019 Thurs</h4>
                    <p className='show-text-link'><a href='https://www.joshgroban.com/tour' target='_blank' rel='noopener noreferrer'>Josh Groban
                  <br />
                  McMenamin's Edgefield Amphitheater (Troutdale, OR)</a></p>
                  </div>
                </div>
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>August 20, 2019 Tues</h4>
                    <p className='show-text-link'><a href='https://www.joshgroban.com/tour' target='_blank' rel='noopener noreferrer'>Josh Groban
                  <br />
                  Les Schwab Amphitheater (Bend, OR)</a></p>
                  </div>
                </div>
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>August 16, 2019 Fri</h4>
                    <p className='show-text-link'><a href='http://levigillis.com/' target='_blank' rel='noopener noreferrer'>Levi Gillis
                  <br />
                  Chapel Performance Space at the Good Shepherd Center (Seattle, WA)</a></p>
                  </div>
                </div>
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>August 9, 2019 Fri</h4>
                    <p className='show-text-link'><a href='https://www.andrewjoslynmusic.com/passenger-string-quartet/' target='_blank' rel='noopener noreferrer'>Passenger String Quartet
                  <br />
                  Downtown Seattle</a></p>
                  </div>
                </div>
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>August 1, 2019 Thurs</h4>
                    <p className='show-text-link'><a href='https://www.facebook.com/ScrapeMusic/' target='_blank' rel='noopener noreferrer'>Scrape
                  <br />
                  Chapel Performance Space at the Good Shepherd Center (Seattle, WA)</a></p>
                  </div>
                </div>
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>July 12, 2019 Sat</h4>
                    <p className='show-text-link'><a href='http://artisthome.org/timber-outdoor-music-festival-lineup-announcement/' target='_blank' rel='noopener noreferrer'>Mark Lanegan & The Passenger String Quartet
                  <br />
                  Timber Music Festival (Carnation, WA)</a></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      */}
        <div className='home-contact-text'>
          <Link to='/contact' className='link pulse'>Say Hello <i class='fas fa-heart fa-spin fa-lg' /></Link>

        </div>
      </div>
    )
  }
}

export default Home
