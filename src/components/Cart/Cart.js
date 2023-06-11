import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Cart.css";
import cartImg from "../assets/add-cart.png";

function Cart() {
  return (
    <Container className=" cart bg-light rounded border border-info">
      <Row >
        <Col className="number fw-bold text-danger fs-6" xs={1}>0</Col>
        <Col xs={10}>
          <img className="img" src={cartImg} />
        </Col>
      </Row>
    </Container>
  );
}


export default Cart;
