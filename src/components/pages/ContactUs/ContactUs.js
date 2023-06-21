import React, { useState } from "react";

import "./ContactUs.css";
function ContactUs() {
    const [allData, setAllData] = useState({
        userName:'',
        userPhoneNumber:'',
        userMessage:'',
        userEmail:'',
    })

    const nameChangeHandler = (e)=>{
        setAllData((prevData)=>{
            return{
                ...prevData,
                userName:e.target.value
            }
        })
    }
    const phoneNumberChangeHandler = (e)=>{
        setAllData((prevData)=>{
            return{
                ...prevData,
                userPhoneNumber:e.target.value
            }
        })
    }
    const emailChangeHandler = (e)=>{
        setAllData((prevData)=>{
            return{
                ...prevData,
                userEmail:e.target.value
            }
        })
    }
    const textMessageChangeHandler = (e)=>{
        setAllData((prevData)=>{
            return{
                ...prevData,
                userMessage:e.target.value
            }
        })
    }

    const allInputHandler = async(e)=>{
        e.preventDefault();

        const allInfo = {
            userName:allData.userName,
            userEmail:allData.userEmail,
            userMessage:allData.userMessage,
            userPhoneNumber:allData.userPhoneNumber
        }

        const response = await fetch('https://ecommerce-project-e010c-default-rtdb.firebaseio.com/feedback.json',{
            method:'POST',
            body: JSON.stringify(allInfo),
            headers: {
              'Content-Type': 'application/json'
            }
           
        })

    }

  return (
    <div className="mb-5">
      <div className="container ">
        <div className="row contact-row   rounded-5 mb-2">
          <div className="col-5 left common border border-2 ">
            <div className="info d-flex flex-column justify-content-between">
            <div>
            <h2 className="quote-heading">You Are The Speical For Us.</h2>
                <p className="quote">
                  "Your feedback is the fuel that keeps our online store running smoothly. We'd love to hear from you! Share your thoughts, questions, or concerns, and together we'll create a seamless shopping experience."
                </p>
              </div>

            </div>
          </div>

          <div className="col-7 right common border border-2">
          <form onSubmit={allInputHandler}>
            <div className="container mt-5">
              <div className="row">
                
                <p className="fs-4  fw-bold mb-4 heading">Contact Us</p>
                
                <div className="col-6">
                 
                  <div class="mb-4">
                        
                    
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Name"
                      onChange={nameChangeHandler}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div class="mb-4">
                    <input
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Phone Number"
                      onChange={phoneNumberChangeHandler}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div class="mb-4">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      onChange={emailChangeHandler}
                    />
                  </div>
                  <div class="mb-4">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      placeholder="Your Message..."
                      onChange={textMessageChangeHandler}
                    ></textarea>
                 <button type="submit"  className="btn btn-primary mt-4 w-100 rounded-5" >submit</button>
                 
                  </div>
                 
                </div>
              </div>
           
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;