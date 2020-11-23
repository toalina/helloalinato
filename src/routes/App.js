import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/index.css'
import '../styles/hamburgers.css'
import '../styles/nav.css'
import '../styles/footer.css'
import '../styles/home.css'
import '../styles/about.css'
import '../styles/media.css'
import '../styles/contact.css'
import '../styles/tech.css'
import '../styles/etc.css'
import '../styles/mask.css'
import '../styles/shop.css'
import Main from './Main'
// import ScrollToTop from './ScrollToTop'

const App = () => (
  <div className='App'>
    <header className='header-wrapper'>
      <nav className='top-bar topbar-responsive'>
        <div className='top-bar-title top-bar-left'>
          <span data-responsive-toggle='topbar-responsive' data-hide-for='medium'>
            <button className='hamburger hamburger--spring' type='button' data-toggle>
              <span className='hamburger-box'>
                <span className='hamburger-inner' />
              </span>
            </button>
          </span>
          <a className='topbar-responsive-logo' href='/'><strong>Alina To</strong></a>
        </div>
        <div id='topbar-responsive' className='topbar-responsive-links'>
          <div className='top-bar-right'>
            <ul className='menu simple vertical medium-horizontal' data-responsive-menu='accordion medium-dropdown'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/media'>Media</Link></li>
              <li><Link to='/mask'>Mask</Link></li>
              <li><Link to='/shop'>Shop</Link></li>
              <li>
                <Link to='/etc'>Etc.</Link>
                {/*
                  Dropdown menu
                  <ul className='vertical menu'>
                    <li><Link to='/tech'>Tech</Link></li>
                    <li><Link to='/baking'>Bake</Link></li>
                    <li><Link to='/sewing'>Sew</Link></li>
                  </ul>
                */}
              </li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <Main />
    <footer className='footer-wrapper'>
      <ul className='bottom-nav-wrapper'>
        <li><a href='https://www.instagram.com/geniuspluslove/' target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram fa-2x' /></a></li>
        <li><a href='https://www.instagram.com/alinasew/' target='_blank' rel='noopener noreferrer'><i class="fas fa-seedling fa-2x"></i></a></li>
        <li><a href='https://www.instagram.com/alinadough/' target='_blank' rel='noopener noreferrer'><i className='fas fa-bread-slice fa-2x' /></a></li>
        <li><a href='https://www.linkedin.com/in/alinato/' target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin fa-2x' /></a></li>
        <li><a href='https://github.com/toalina' target='_blank' rel='noopener noreferrer'><i className='fab fa-github fa-2x' /></a></li>
      </ul>
      <div className='footer-copyright'>
        <p>&#169; Copyright 2020. All Rights Reserved.
        <br />
        Site designed and built from scratch by <Link to='/tech' className='link'>Alina</Link>.</p>
      </div>
    </footer>
  </div>
)

export default App
