import React from 'react'
import slack from '../../assets/slack.png'
import github from '../../assets/github.png'
import './link.css'
export const Link = () => {
  return (
    <div className='links'>
      <a className='twitter' href='https://twitter.com/anaguchidi35?t=7w-IG_UxIgwHm4ulrzpDSA&s=08'>
        <p>Twitter Link</p>
      </a>
      <a id='btn_zuri' href='http://training.zuri.team/' >
        <p >Zuri Team</p>
      </a>
      <a id='books' href='http://books.zuri.team' >
        <p>Zuri Books</p>
      </a>
      <a id='book_python' href='http://books.zuri.team/python-for-beginners?ref_id=chidiebere' >
        <p>Python Books</p>
      </a>
      <a id='pitch' href='https://background.zuri.team' >
        <p>Background check for coder</p>
      </a>
      <a id='book_design' href='http://books.zuri.team/design-rules' >
        <p>Design Books</p>
      </a>
      <div className='img-row'>
      <img className='image' src={slack} alt='slack' />
      <img className='image' src={github} alt='github' />
      </div>
    </div>
  )
}
