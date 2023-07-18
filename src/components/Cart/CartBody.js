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

      const  fetchedDataFromServer = []
      try {
        const response = await fetch(
          `https://ecommerce-project-e010c-default-rtdb.firebaseio.com/${userEmail}.json`
        );
      
        const data = await response.json();
          console.log(data)
          for (const id in data) {
            fetchedDataFromServer.push({
                serverId:id,
                ...data[id]
            })
          }
      


      } catch (err) {
        console.log(err);
      }
      updateTheCartItems(fetchedDataFromServer);
  
   
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
    <div onClick={cartBodyClickHandler}>
      <div>
        <div xs={12} className="cartBody rounded rounded-4 border border-5">
          <p style={{ marginLeft: "45%" ,}} className="fs-2   fw-bold">
            Cart
          </p>
          <button className="btn-primary" style={{position:'absolute', right:'36%'}} onClick={()=>{
            props.cartOpen(false)
          }}>X</button>

        
              <table class="fl-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>title</th>
                                <th>Amount</th>
                                <th>Quantity</th>
                                <th>Action</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                        {cartData.map((item) => (
                  <CartItem
                    id={item.serverId}
                    title={item.title}
                    imgUrl={item.url}
                    price={item.price}
                    quantity={item.updatedQuantity}
                    key={item.id}
                    onFetchData={fetchData}
                  />
                ))}
                        </tbody>
                    </table>
           
        </div>
      </div>
    </div>
  );
};

export default CartBody;
