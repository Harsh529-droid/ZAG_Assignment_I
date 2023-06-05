import React from 'react'
import more from '../assets/more.png'
import avatar from '../assets/avatar.png'
import '../style.scss'


const HomeNav = () => {
  return (
    <>
        <div className="HomeNav">
    
            <img src={more}  className='moreIcon'/>
            <img src={avatar} className='avatarIcon' />
    
        </div>
    </>
  )
}

export default HomeNav