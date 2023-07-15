import React, { useState, useContext, useEffect ,useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CartBody.css";
import CartItem from "./CartItem";


import AuthContext from "../../store/authContext/AuthContext";
import CartItemContext from "../../store/CartItemContext/CartItemContext";

const CartBody = (props) => {
 
  const {cartData, updateTheCartItems}= useContext(CartItemContext);

  const { isLoggedIn } = useContext(AuthContext);

  
    let fetchData = async () => {
      const email = localStorage.getItem("email");
      const userHalfEmail = email.replace("@", "");
      const userEmail = userHalfEmail.replace(".", "");
    
      try {
        const response = await fetch(
          `https://crudcrud.com/api/8de200f92a404275bb4dcc108f8887f9/${userEmail}`
        );
      
        const data = await response.json();
          console.log(data)
        
        updateTheCartItems(data);


      } catch (err) {
        console.log(err);
      }
  
   
  }
 
  useEffect(() => {
    if(isLoggedIn){
      fetchData();
    }
   
   
  }, []);

  const cartBodyClickHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <Container onClick={cartBodyClickHandler}>
      <Row>
        <Col xs={12} className="cartBody rounded rounded-4 border border-5">
          <p style={{ marginLeft: "30%" ,}} className="fs-2   fw-bold">
            Cart
          </p>
          <button className="btn-primary" style={{position:'absolute', left:'60%', top:'2%'}} onClick={()=>{
            props.cartOpen(false)
          }}>X</button>

          <Container>
            <Row>
              <Col xs={8}>
                <div className=" d-flex justify-content-between fw-bold fs-5 p-4">
                  <span>Item</span>
                  <span>Price</span>
                  <span>Quantity</span>
                </div>
                <hr />

                {cartData.map((item) => (
                  <CartItem
                    id={item._id}
                    title={item.title}
                    imgUrl={item.url}
                    price={item.price}
                    quantity={item.updatedQuantity}
                    key={item.id}
                    onFetchData={fetchData}
                  />
                ))}
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default CartBody;
