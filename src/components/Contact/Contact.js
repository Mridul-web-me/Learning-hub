import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <form>
          <div class="form-group">
            <input type="Name" class="form-control" id="exampleInputName" placeholder="Enter your Name" />
          </div>
          <br />
          <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail" placeholder="Enter your email" />
          </div>
          <br />
          <div class="form-group">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type Your Message"></textarea>
          </div>
          <br />
          <button className="contact-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
