import React from 'react'
import '../Item/Item.css'
const Item = (props) => {
  return (
    <div >
      <div className='item row'>
        <p className='col-4'>{props.name}</p>
        <p className='col-4'>{props.price}</p>
        <p className='col-4'>{props.price2}</p>
      </div>
        
        
    </div>
  )
}

export default Item