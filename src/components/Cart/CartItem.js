import React, { useContext, useEffect } from "react";
import "./CartItem.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import CartItemContext from "../../store/CartItemContext/CartItemContext";
import CartContext from "../../store/cartContext/CartContext";

function CartItem(props) {

  const { cartData, updateTheCartItems } = useContext(CartItemContext);
  const {updateTheValue} = useContext(CartContext)
  const removeItemHandler = async (e) => {


    const email = localStorage.getItem("email");
    const userHalfEmail = email.replace("@", "");
    const userEmail = userHalfEmail.replace(".", "");
    console.log(userEmail, props.id)

    try {
      const response = await axios.delete(
        `https://crudcrud.com/api/50de178b2c024334b0c1424fe5c8fa68/${userEmail}/${props.id}`);
        
        if(response.error){
          throw new Error('unable to fetch')
         
        }else{
          props.onFetchData()
          console.log(response);
        }
      
   
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div
      key={props.id}
      className=" parentDiv cartItem d-flex justify-content-between fw-bold fs-5 p-4"
    >
      <span className="imgItem">
        <img className="item " src={props.imgUrl} />
        <span className="imgItem fs-6 ">{props.title}</span>
      </span>
      <span className="item">${props.price}</span>
      <div>
        <span className="item "> {props.quantity}</span>
        <Button onClick={removeItemHandler} className="rmBtn">
          Remove
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
