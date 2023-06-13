import React, { Fragment } from "react";
import "./ProductBody.css";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";
import {Button} from "react-bootstrap";

const productsArr = [
  {
    id:1,
    title: "Colors",

    price: 100,

    imageUrl: "https://source.unsplash.com/WWesmHEgXDs",
    category: "music",
  },

  {
    id:2,
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    category: "music",
  },

  {
    id:3,
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    category: "music",
  },

  {
    id:4,
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    category: "music",
  },
  {
    id:5,
    title: "t-shirt",
    price: 40,
    imageUrl: "https://source.unsplash.com/WWesmHEgXDs",
    category: "merchandise",
  },
  {
    id:6,
    title: "top",
    price: 15,
    imageUrl: "https://source.unsplash.com/pFPvIlth4ec",
    category: "merchandise",
  },
  {
    id:7,
    title: "shirt ",
    price: 20,
    imageUrl: "https://source.unsplash.com/Xo-gWpCmgDw",
    category: "merchandise",
  },
  {
    id:8,
    title: "suite",
    price: 8,
    imageUrl: "https://source.unsplash.com/nKwXqyivGNM",
    category: "merchandise",
  },
 
];




function ProductBody() {
  return (
    <div className=" mt-5 parentDiv  ">
      <section className="sectionStyle">
        <h2 className="" style={{ marginLeft: "43%", marginBottom: "-3%" }}>
          MUSIC
        </h2>
        <Container className="w-75 productBody p-5 rounded mt-0">
          <Row className="d-flex justify-content-center align-item-center">

            {productsArr.map((product) => {
              return product.category == 'music' ? (
                <Col key={product.id} xs={5} className="m-3">
                  <Product id={product.id} title={product.title} price={product.price} url={product.imageUrl} />
                </Col>
              ) : null;
            })}

          </Row>
        </Container>
      </section>
      <section className="sectionStyle">
        <h2 className="" style={{ marginLeft: "43%", marginBottom: "-3%" }}>
          MERCH
        </h2>
        <Container className="w-75 productBody p-5 rounded mt-0">
          <Row className="d-flex justify-content-center align-item-center">

          {productsArr.map((product) => {
              return product.category == 'merchandise' ? (  
                <Col key={product.id} xs={5} className="m-3">
                  <Product title={product.title} price={product.price} url={product.imageUrl} />
                </Col>
              ) : null;
            })}

          </Row>
        </Container>
      </section>
     
     
    </div>
  );
}

export default ProductBody;
