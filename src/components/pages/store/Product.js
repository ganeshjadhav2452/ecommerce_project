import React, { Fragment, useContext, useState, } from "react";
import { Link , useParams } from "react-router-dom/cjs/react-router-dom.min";

import { Card, Button } from "react-bootstrap";
import CartContext from "../../../store/cartContext/CartContext";
import './Product.css'
import ProductDetailsContext from "../../../store/productDetailsContext/ProductDetailsContext";
import CartItemContext from "../../../store/CartItemContext/CartItemContext";
import LoaderEl from "../../Loader/Loader";
function Product(props) {
  const {id} = useParams()
  console.log(id)

  const {  updateTheValue } = useContext(CartContext);
  const [updatedQuantity, updateTheQuantity] = useState(1);
  const { updateTheDetailsObj } = useContext(ProductDetailsContext)
  const {cartData} = useContext(CartItemContext)
  const [isLoading, setIsLoading] = useState(false)
  const quantityUpdater = (e) => {
   
    updateTheQuantity(e.target.value)
  }
  const newObj = {
    ...props,
    updatedQuantity
  };

  const addToCartButtonHandler = async () => {

    const email = localStorage.getItem('email')
    const userHalfEmail = email.replace('@', '')
    const userEmail = userHalfEmail.replace('.', '')
    // returning nothing if product is already there in the cart
    let itemId ;
    
    let flag = false;
    cartData.map((obj) => {
      if (obj.id === props.id) {
        flag = true
        itemId = obj.serverId
        updateTheQuantity (obj.updatedQuantity + updatedQuantity) 
        return;
      } 
    })

   
  
   

   

    // updateTheQuantity(updatedQuantity + 1)

    if (!flag) {
      try {
        
        setIsLoading(true)

        const response = await fetch(`https://ecommerce-project-e010c-default-rtdb.firebaseio.com/${userEmail}.json`, {
          method: "POST",
          body: JSON.stringify(newObj),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        
        setIsLoading(false)
        if (response.ok) {
         
          return;
        }
       

        const data = await response.json()

        updateTheValue(data);
        // updateTheCartItems(data)
      } catch (err) {
        console.log(err)
      }
    }else{

      try {
        const response = await fetch(`https://ecommerce-project-e010c-default-rtdb.firebaseio.com/${userEmail}/${itemId}.json`, {
          method: "PUT",
          body: JSON.stringify({
            ...newObj,
           updatedQuantity:updatedQuantity

          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
     
        if (response.ok) {
         
          return;
        }
       

        const data = await response.json()

        updateTheValue(data);
        // updateTheCartItems(data)
      } catch (err) {
        console.log(err)
      }
    }

    
  };

  const cardClickHandler = () => {
    updateTheDetailsObj(props)
   
  }

  const buyButtonClickHandler = ()=>{
   console.log(` Thanks for purchasing ${props.title} its now being ready to deliver` )
  }
  return (
    <Fragment>
      {isLoading && <LoaderEl/>}
      <Card  style={{ width: "18rem" }} className="  rounded-4 shadow-lg bg-light">
        <Card.Title className=" d-flex justify-content-center m-2">
          {props.title}
        </Card.Title>

        <Link to={`/store/${props.id}`} style={{ textDecoration: 'none' }} > <Card.Img onClick={cardClickHandler} variant="top" src={props.url} className="  cardImg p-2 rounded-4 "/> </Link>

        <Card.Body className="d-flex  align-items-center  ">
          <Card.Text className="fw-bold fs-4">${props.price}</Card.Text>
          <form>
            <input onChange={quantityUpdater} value={updatedQuantity} type='number fw-bold' className="w-25  qty p-2"></input>
          </form>
          <div className="d-flex flex-row shadow">

         
          <Button  className="addBtn shadow " variant="danger" onClick={buyButtonClickHandler}>
            Buy
          </Button>
          <Button className="addBtn shadow" variant="warning" onClick={addToCartButtonHandler}>
            Add
          </Button>
          </div>
        </Card.Body>
      </Card>
      </Fragment>
   
  );
}

export default Product;
