import React from 'react'
import './About.css'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <Header/>
      <h1>About page</h1>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default About
