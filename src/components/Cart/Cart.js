import React,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Cart.css";
import cartImg from "../assets/add-cart.png";
import CartBody from "./CartBody";

function Cart() {
const [cartOpen, setCartOpen] = useState(false);

  const openCartBodyHandler = ()=>{
    setCartOpen(!cartOpen)
    console.log(cartOpen)
  }
  return (
    <Container className=" cart bg-light rounded border border-info" onClick={openCartBodyHandler}>
      <Row >
      
        <Col className="number fw-bold text-danger fs-6" xs={1}>0</Col>
        <Col xs={10}>
        <img className="img" src={cartImg} />

          {!cartOpen? null:<CartBody />}
        </Col>
      </Row>
    </Container>
  );
}


export default Cart;
