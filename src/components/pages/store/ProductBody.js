import React from "react";
import "./ProductBody.css";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";


const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    category: "music",
    reviews: [
      { rating: 4, comment: "Great album!" },
      { rating: 5, comment: "Highly recommended!" }
    ],
    seller: "Music Store Inc.",
    warranty: "1 year",
    specifications: {
      format: "CD",
      genre: "Pop",
      releaseDate: "2022-05-15"
    }
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    category: "music",
    reviews: [
      { rating: 3, comment: "Decent album." },
      { rating: 4, comment: "Good mix of songs." }
    ],
    seller: "Music Emporium",
    warranty: "6 months",
    specifications: {
      format: "Vinyl",
      genre: "Rock",
      releaseDate: "2023-01-20"
    }
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    category: "music",
    reviews: [
      { rating: 5, comment: "Amazing collection!" },
      { rating: 4, comment: "Impressive artwork." }
    ],
    seller: "Music World",
    warranty: "None",
    specifications: {
      format: "Digital Download",
      genre: "Electronic",
      releaseDate: "2023-03-05"
    }
  },
  {
    id: 4,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    category: "music",
    reviews: [],
    seller: "Music Mart",
    warranty: "3 months",
    specifications: {
      format: "Streaming",
      genre: "Pop",
      releaseDate: "2023-02-10"
    }
  },
  {
    id: 5,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    category: "music",
    reviews: [
      { rating: 4, comment: "Great beats!" },
      { rating: 4, comment: "Catchy tunes." }
    ],
    seller: "Music Outlet",
    warranty: "None",
    specifications: {
      format: "MP3",
      genre: "Hip Hop",
      releaseDate: "2023-04-15"
    }
  },
  {
    id: 6,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    category: "music",
    reviews: [
      { rating: 4, comment: "Great beats!" },
      { rating: 4, comment: "Catchy tunes." }
    ],
    seller: "Music Outlet",
    warranty: "None",
    specifications: {
      format: "MP3",
      genre: "Hip Hop",
      releaseDate: "2023-04-15"
    }
  },
  
  
  {
    id: 7,
    title: "t-shirt",
    price: 40,
    imageUrl: "https://source.unsplash.com/WWesHEgXDs",
    category: "merchandise",
    reviews: [
      { rating: 5, comment: "Great shirt!" },
      { rating: 4, comment: "Good quality." }
    ],
    seller: "Merchandise Store Inc.",
    warranty: "1 year",
    specifications: {
      size: "S",
      color: "Black",
      material: "Cotton"
    }
  },
  {
    id: 8,
    title: "top",
    price: 15,
    imageUrl: "https://source.unsplash.com/pFPvIlth4ec",
    category: "merchandise",
    reviews: [
      { rating: 3, comment: "Decent shirt." },
      { rating: 4, comment: "Good quality." }
    ],
    seller: "Merchandise Emporium",
    warranty: "6 months",
    specifications: {
      size: "M",
      color: "White",
      material: "Polyester"
    }
  },
  {
    id: 9,
    title: "shirt ",
    price: 20,
    imageUrl: "https://source.unsplash.com/Xo-gWpCmgDw",
    category: "merchandise",
    reviews: [
      { rating: 4, comment: "Great fit!" },
      { rating: 5, comment: "Love the design." }
    ],
    seller: "Merchandise World",
    warranty: "None",
    specifications: {
      size: "L",
      color: "Red",
      material: "Cotton/Polyester"
    }
  },
  {
    id: 10,
    title: "suite",
    price: 8,
    imageUrl: "https://source.unsplash.com/nKwXqyivGNM",
    category: "merchandise",
    reviews: [
      { rating: 3, comment: "Decent shirt." },
      { rating: 4, comment: "Good quality." }
    ],
    seller: "Merchandise Mart",
    warranty: "3 months",
    specifications: {
      size: "XL",
      color: "Blue",
      material: "100% Cotton"
    }
  },
  {
    id: 11,
    title: "shirt ",
    price: 20,
    imageUrl: "https://source.unsplash.com/Xo-gWpCmgDw",
    category: "merchandise",
    reviews: [
      { rating: 3, comment: "Decent shirt." },
      { rating: 4, comment: "Good quality." }
    ],
    seller: "Merchandise Outlet",
    warranty: "None",
    specifications: {
      size: "XXL",
      color: "Green",
      material: "Polyester/Cotton"
    }
  },
  {
    id: 12,
    title: "suite",
    price: 8,
    imageUrl: "https://source.unsplash.com/nKwXqyivGNM",
    category: "merchandise",
    reviews: [
      { rating: 3, comment: "Decent shirt." },
      { rating: 4, comment: "Good quality." }
    ],
    seller: "Merchandise Outlet",
    warranty: "None",
    specifications: {
      size: "XXXL",
      color: "Yellow",
      material: "100% Cotton"
    }
  }
];




function ProductBody() {



  
  return (
    <div className="parentDiv  " >
   
      <section className="sectionStyle">
        <h2 className="" style={{ marginLeft: "43%", marginBottom: "-3%" }}>
          MUSIC
        </h2>
        <Container fluid className="w-100 productBody p-5 rounded mt-0">
          <Row className="d-flex justify-content-center align-item-center">

            {productsArr.map((product) => {
              return product.category === 'music' ? (
                <Col key={product.id} xs={3} className="m-3">
                  <Product id={product.id} title={product.title} price={product.price} url={product.imageUrl} specifications={product.specifications} reviews={product.reviews} seller={product.seller} warranty={product.warranty} />
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
        <Container fluid className=" productBody p-5 rounded mt-0">
          <Row className="d-flex justify-content-center align-item-center">

          {productsArr.map((product) => {
              return product.category === 'merchandise' ? (  
                <Col key={product.id} xs={3} className="m-3">
                  <Product id={product.id} title={product.title} price={product.price} url={product.imageUrl} specifications={product.specifications} reviews={product.reviews} seller={product.seller} warranty={product.warranty}/>
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
