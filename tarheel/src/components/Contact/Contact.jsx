import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className="cc" id="contact-container">
       
       <div class="form-main">
    <div class="main-wrapper">
        <div className="form-column">
      <h2 class="form-head">Contact Us</h2>
      <form class="form-wrapper">
        <div class="form-card">
          <input class="form-input" type="text" name="full_name" required="required"   />
          <label class="form-label" for="full_name">Full Name</label>
        </div>

        <div class="form-card">
          <input class="form-input" type="email" name="email"  required="required"/>
          <label class="form-label" for="email">Email</label>
        </div>

        <div class="form-card">
          <input   class="form-input"   type="number" name="phone_number" required="required" />
          <label class="form-label" for="phone_number">Phone number</label>
        </div>

        <div class="form-card">
          <textarea
            class="form-textarea"
            maxlength="420"
            rows="3"
            name="phone_number"
            required="required"
          ></textarea>
          <label class="form-textarea-label" for="phone_number"
            >Message</label
          >
        </div>
        <div class="btn-wrap">
          <button> Submit </button>
        </div>
      </form>
      </div>
    <div className="info">
        {/* Right Side - Google Maps and Contact Information */}
        <div className="contact-info">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093947!2d144.9537363153179!3d-37.81720997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57766f0b729f28c!2sGoogle%20Australia!5e0!3m2!1sen!2sin!4v1593711606808!5m2!1sen!2sin"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="contact-details">
          
            <p><strong>Phone:</strong> +1 999-999-9999</p>
            <p><strong>Email:</strong> technova@gmail.com</p>
            
          </div>
        </div>
        </div>

    </div>
  </div>
    
    
    </div>
  )
}

export default Contact