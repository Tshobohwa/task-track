import React from 'react'
import './Projects.css'
import plus from '../../assets/plus.png'

const Projects = () => {
  return (
    <>
    <div className='projects--header'>
      <h1 className='project--page__title'>Projects</h1>
      <button className='new--project__btn'>
        <img src={plus} alt="plus" className='project--page__icon' />
      </button>
    </div>
    <ul className='projects--list'>
        <li className='project--li__item'></li>
        <li className='project--li__item'></li>
        <li className='project--li__item'></li>
        <li className='project--li__item'></li>
        <li className='project--li__item'></li>
    </ul>
    </>
  )
}


export default Projects
