import React from 'react'
import '../style.scss'
import Up from './Up'
import Down from './Down'

const Product = () => {
  return (
    <>
       <div className="mainP">
            
            <div className="Product">

                <Up/>

                <Down/>

            </div>

       </div>
    </>
  )
}

export default Product