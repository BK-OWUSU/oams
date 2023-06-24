import React from 'react'
import './contact.css';

const Contact = () => {
  return (
    <section className="contact" id='contact'>
      <h2 className='fade-in'>Message Us</h2>
        <div className="container contact_container">
          <form action="">
            <div className="form_wrapper">
              <input type="text" name="Full name" placeholder='Enter Your Fullname' required/>
              <input type="email" name="email"placeholder='Enter Your Email' required/>
              <textarea name="message"rows="8" placeholder='Enter Message' required></textarea>
            </div>
            <button className='btn btn-primary' type="submit">Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact