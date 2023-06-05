import React from 'react'
import cart from '../assets/cart.png'
import notification from '../assets/notification.png'
import Vector from '../assets/Vector.png'
import home from '../assets/home.png'

const Footer = () => {
    return (

        <div className='Footer'>
           <img src={home} alt=""  />
           <img src={cart} alt="" />
           <img src={notification} alt="" />
           <img src={Vector} alt="" />
        </div> 
      
    )
}

export default Footer