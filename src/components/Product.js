import React from 'react'
import { Card, Button } from 'react-bootstrap'


function Product(props) {
  return (
    <Card style={{ width: '18rem' }} className='  rounded-4 shadow-lg bg-light'>
        <Card.Title className=' d-flex justify-content-center m-2'>{props.title}</Card.Title>
      <Card.Img variant="top" src={props.url} className=' p-2 rounded-4 '/>
      <Card.Body className='d-flex  align-items-center justify-content-between '>
        
        <Card.Text className='fw-bold fs-4'>${props.price}</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default Product