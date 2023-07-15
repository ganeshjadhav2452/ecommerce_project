import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Cart.css";
import cartImg from "../assets/add-cart.png";
import CartBody from "./CartBody";

import CartItemContext from "../../store/CartItemContext/CartItemContext";

function Cart() {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartData } = useContext(CartItemContext);

  console.log(cartData)

    const itemQuantity = cartData.reduce((curNum,item)=>{

      return (curNum + Number.parseInt(item.updatedQuantity))
  
    },0)
  
    console.log(cartOpen)

  const openCartBodyHandler = () => {
    setCartOpen(!cartOpen);
    console.log('cart Clicked')
  };
  return (
    <Container
      className=" cart bg-light rounded border border-info "
      onClick={openCartBodyHandler}
    >
      <Row>
        <Col className="number fw-bold text-danger fs-6" xs={1}>
          {itemQuantity}
        </Col>
        <Col xs={10}>
          <img className="img" src={cartImg} />

          {!cartOpen ? null : <CartBody cartStatus={cartOpen} cartOpen={setCartOpen} />}
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
