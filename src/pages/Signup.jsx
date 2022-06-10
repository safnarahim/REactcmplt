import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
function Signup() {
  let navigate = useNavigate()
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:3001/api/Signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name,
        Email,
        Password                                      
      }),
    })
    const data = await response.json()
    if (data.status === 'ok') {
      navigate("/Login")
    }
    else {
      alert('This email already in use. Use a different email !!')
    }
  }

  return(

    <React.Fragment>
       
       <div className="container">
      <p>
        Don’t Hesitate To Ask
      </p>
      <h2 className="">
        FREE CONSULTATION
      </h2>
    </div>
    <div className="container">

      <div className="row">
        <div className="col-md-6 ">
          <form action="">
            <div className="contact_form-container">
              <div>
                <div>
                  <label>
                    Name
                    <input type="text" name="Name" value={input.Name} onChange={handleChange}/>
                  </label>
                </div>
                <div>
                  <label>
                    Email
                    <input type="email" name="Email" value={input.Email} onChange={handleChange} />
                  </label>
                </div>

                <div>
                  <label>
                    Phone Number
                    <input type="text" name="PhoneNumber" value={input.PhoneNumber} onChange={handleChange}/>
                  </label>
                </div>
              
                
                <div className="mt-5">
                  <button type="submit" onClick={handleClick}>
                    Send 
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="contact_img-box">
            <img src="assets/images/form-img.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
    
    </React.Fragment>

);

}
export default Signup;