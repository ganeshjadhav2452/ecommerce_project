import React,{Fragment} from "react";
import "./CartItem.css";
import { Button } from "react-bootstrap";
import axios from "axios";


function CartItem(props) {



  const removeItemHandler = async (e) => {


    const email = localStorage.getItem("email");
    const userHalfEmail = email.replace("@", "");
    const userEmail = userHalfEmail.replace(".", "");
    console.log(userEmail, props.id)

    try {
      const response = await axios.delete(
        `https://ecommerce-project-e010c-default-rtdb.firebaseio.com/${userEmail}/${props.id}.json`);
        
        if(response.error){
          throw new Error('unable to fetch')
         
        }else{
          props.onFetchData()
          console.log(response);
        }
      
   
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    /*
    <div
      key={props.id}
      className=" parentDiv cartItem d-flex justify-content-between fw-bold fs-5 p-4"
    >
      <span className="imgItem">
        <img className="item " src={props.imgUrl} />
        <span className="imgItem fs-6 ">{props.title}</span>
      </span>
      <span className="item">${props.price}</span>
      <div>
        <span className="item "> {props.quantity}</span>
        <Button onClick={removeItemHandler} className="rmBtn">
          Remove
        </Button>
      </div>
    </div>
    */


    <Fragment>
    <tr>
    <td>  <img className="item " src={props.imgUrl} /></td>
        <td>{props.title}</td>
        <td>{props.price}</td>
        <td>{props.quantity}</td>
       
        <td> <Button onClick={removeItemHandler} className="rmBtn">
          Remove
        </Button></td>
       
    </tr>
</Fragment>
  );
}

export default CartItem;
