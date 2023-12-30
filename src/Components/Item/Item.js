import React from 'react'
import '../Item/Item.css'
const Item = (props) => {
  return (
    <div >
      <div className='item row'>
        {props.link==="Sandwiches" ?(
        <>
        <p className='col-4'>{props.name}</p>
        <p className='col-4'>{props.price}</p>
        <p className='col-4'>{props.price2}</p>
        </>
        )
        :(
        <>
        <p className='col-6'>{props.name}</p>
        <p className='col-6'>{props.price}</p>
        </>)}
        {/* {props==="Sandwiches"?(<p className='col-4'>{props.price}</p>):(<p className='col-6'>{props.price}</p>)}
        {props==="Sandwiches"?(<p className='col-4'>{props.price2}</p>):(<p className='col-6'>{props.price2}</p>)} */}
        {/* {props==="Sandwiches"?(<p className='col-4'>{props.name}</p>):(<p className='col-6'>{props.name}</p>)}
        //  */
        }
        {/* <p className='col-4'>{props.name}</p>
        <p className='col-4'>{props.price}</p>
        <p className='col-4'>{props.price2}</p> */}
      </div>
        
        
    </div>
  )
}

export default Item