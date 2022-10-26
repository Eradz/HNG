import React from 'react'
import {BiShare} from 'react-icons/bi'
import {FiCamera} from 'react-icons/fi'
import profile from '../../assets/profile__img.png'
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
       <p>Annette Black</p>
      </div>
      <BiShare className='btn'/>
    </>
  )
}
