import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <div className="container">
            <form>
  <div class="form-group">
    <input type="Name" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter your Name"/>
  </div>
  <br/>
  <div class="form-group">
    <input type="password" class="form-control" id="exampleInputEmail" placeholder="Password"/>
  </div>
  <br/>
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type Your Message"></textarea>
  </div>
  <br/>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    )
}

export default Contact
