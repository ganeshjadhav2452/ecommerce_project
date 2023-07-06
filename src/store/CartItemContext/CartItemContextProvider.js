import CartItemContext from "./CartItemContext";
import React, { useContext,useState } from "react";

function CartItemContextProvider(props) {
    const [cartData,setCartData] = useState([])

    const updateTheCartItems=(data)=>{
        setCartData(data)
    }

    const addCartData = (data)=>{
      
    }
  return <CartItemContext.Provider value={{cartData,updateTheCartItems}}>
    {props.children}
    </CartItemContext.Provider>;
}

export default CartItemContextProvider;
