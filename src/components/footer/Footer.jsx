import React from 'react'
import './footer.css'
import ig from '../../assets/I4G.png'
export const Footer = () => {
  return (
    <div className='contain'>
    <div className='zuri'>
        <p>Zuri</p>
        <div className='dot'></div>
        <p>Internship</p>
    </div>
    <div className='hng'>
        <p>HNG Internship 9 Frontend Task</p>
    </div>
    <div className='zuri-img'>
        <img src={ig} alt='I4G' />
    </div>
    </div>
  )
}
