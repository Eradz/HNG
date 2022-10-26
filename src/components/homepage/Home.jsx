import React from 'react'
import {BiShare} from 'react-icons/bi'
import {FiCamera} from 'react-icons/fi'
import profile from '../../assets/chidi.jpg'
import './home.css'
export const Home = () => {
  return (
    <>
    <div id='profile_img'>
      <div className='img'>
       <img src={profile} alt='profile' />
       <div className='camera-div'>
       <FiCamera className='camera'/> 
       </div>
      </div>
       <p id='twitter'>Anaguchidi35</p>
       <p id='slack'>Chidiebere</p>
      </div>
      <BiShare className='btn'/>
    </>
  )
}
