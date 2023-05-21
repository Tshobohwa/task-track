import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home--page'>
        <h2 className='welcome--message'>Welcome to</h2>
        <h1 className='home--page--title'>Task-track</h1>
        <p>An easy and simple way to track your tasks progress</p>
        <Link to='/login'>Log in</Link>
        <Link to='/sign_up'>Sign up</Link>
    </div>
  )
}

export default Home
