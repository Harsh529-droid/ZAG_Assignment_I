import React, { useState } from 'react'
import review from '../assets/review.png'
import QtyContext from './QtyContext';


const Rabbit = () => {

  const [qty, setQty] = useState(0);
  const handleClick = (str) => {

    if (str === 'incr') {
      setQty(qty + 1);
    } else {
      if (qty === 0)
        setQty(0);
      else
        setQty(qty - 1);
    }
  }

  return (

    <QtyContext.Provider value={qty}>

      <div className="Rabbit">

        <div className="div1">

          <h2>Roller Rabbit</h2>

          <span className='span1'>
            <button onClick={() => handleClick("decr")}>-</button>
            {qty}
            <button onClick={() => handleClick("incr")}>+</button>
          </span>

        </div>

        <p className='volo'>Volo Odele Dress</p>

        <div className="div2">

          <img src={review} alt="" />
          <p>Available in Stock</p>

        </div>

      </div>
    </QtyContext.Provider>
  )
}

export default Rabbit