import React from 'react'
import arrivalPic from '../assets/NewArrivals.jpg'

const NewArrivals = () => {
  return (
    <div className="NewArrivals">
       
        <div className="arrivalHead">
            <p>New Arrivals</p>
            <p><a href="" >View All</a></p>
        </div>
        
        <div className="ArrivalImg">
            <img src={arrivalPic} alt="" className='arrivalPic'/>
        </div>
    </div>
  )
}

export default NewArrivals