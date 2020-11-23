import React from 'react'
import { NavLink } from 'react-router-dom'

class TechDetails extends React.Component {
  render () {
    return (
      <div className='tech-details'>
        <div className='tech-header'>
          <h1 className='header-title'>The Software Developer</h1>
        </div>
        <img src='../alina-ferry.jpg' alt='' />
        <div className='tech-description'>
          <p>Seattle-based full-stack software developer and devops engineer with experience building and deploying mobile and web applications from proof-of-concept to store with tight deadlines. Focused on high quality client delivery, cross-browser test coverage, attention to detail, and efficiently refactored code. Moonlights as an established violinist. Let’s get to work.</p>
        </div>
        <div className='tech-description'>
          <h2>Skills</h2>
          <p>JavaScript, NodeJS, ReactJS, AngularJS, jQuery, HTML5/CSS3, Sass, Python, Django, iOS, Android, Objective-C, Java, C#, MongoDB, SQL, Git, Agile, Azure DevOps, Google Cloud Platform, Docker, Kubernetes, Deployment, Mocha/Chai/Enzyme, Selenium, Cucumber/Gherkin, Test-Driven Development, Behavior-Driven Development.</p>
        </div>
        <div className='tech-description'>
          <h2>Resume</h2>
          <a href='../AlinaToResume.pdf' target='_blank' className='link link-tech-download pulse'>View && Download .pdf</a>
        </div>

        <p>Visit <a href='https://github.com/toalina' target='_blank' rel='noopener noreferrer' className='link'><i className='fab fa-github fa-sm' /> Github</a> and <a href='https://www.linkedin.com/in/alinato/' target='_blank' rel='noopener noreferrer' className='link'><i className='fab fa-linkedin fa-sm' /> LinkedIn</a> <br />for more info</p>

        <p className='link-to-violin'>Did you know Alina is also a <br /><NavLink className='link' to='/about'>professional violinist</NavLink>?</p>
      </div>
    )
  }
}

export default TechDetails
