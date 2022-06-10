import React,{ useState } from 'react'


  function Login(){


const [Email, setEmail] = useState('')
const [Password,setPassword] = useState('')
async function loginUser(event)
  {
      event.preventDefault()

      const response = await fetch('http://localhost:3001/api/Login', {

      method:'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body:JSON.stringify({
          Email,
          Password,
      }),
     })

const data = await response.json()
if (data.user) {
localStorage.setItem('token', data,user)
alert('login successful')
window.location.href = "//localhost:3001/"

}
else{
    alert('Please check your username and password ')
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
    
    </React.Fragment>

);

}
export default Login;