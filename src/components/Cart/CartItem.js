import React from 'react'
import './CartItem.css'
import { Button } from 'react-bootstrap'

function CartItem(props) {

    const removeItemHandler=(e)=>{
        let parentDiv = e.target.closest('.parentDiv').parentElement;

        let currentEl = e.target.closest('.parentDiv')

        parentDiv.removeChild(currentEl)
    }
    console.log(props)
    return (
        <div className=" parentDiv cartItem d-flex justify-content-between fw-bold fs-5 p-4">
            <span className='imgItem'>
                <img className='item ' src={props.imgUrl} />
                <span className='imgItem fs-6 '>{props.title}</span>
            </span>
            <span className='item'>{props.price}</span>
          <div>
          <span className='item '> {props.quantity}</span>
            <Button onClick={removeItemHandler} className='rmBtn'>Remove</Button>
          </div>
        </div>
    )
}

export default CartItem