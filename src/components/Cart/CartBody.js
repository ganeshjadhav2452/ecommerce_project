import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CartBody.css";
import CartItem from "./CartItem";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black & white",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow & Black",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

function CartBody() {

    const cartBodyClickHandler = (e) => {
        e.stopPropagation();
      };
    
  return (
    <Container onClick={cartBodyClickHandler}>
      <Row>
        <Col xs={12} className="cartBody rounded rounded-4 border border-5">
          <p style={{ marginLeft: "30%" }} className="fs-2   fw-bold">
            Cart
          </p>

          <Container>
            <Row>
              <Col xs={8}>
                <div className=" d-flex justify-content-between fw-bold fs-5 p-4">
                  <span>Item</span>
                  <span>Price</span>
                  <span>Quantity</span>
                </div>

                {cartElements.map((item)=> <CartItem title={item.title} imgUrl={item.imageUrl} price={item.price} quantity={item.quantity}/>)}

              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default CartBody;
