import React from 'react'
import "./contact.css";
import Swal from 'sweetalert2'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2b758914-e2da-47c7-addf-933617c7818d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Email Sent!",
        icon: "success"
      });
    }
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's chat!</h3>
          <p className="contact__details">Send me an email!</p>
        </div>

        <form onSubmit={onSubmit} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input name= "name" type="text" className="contact__form-input" 
              placeholder='Insert your name'/>
            </div>

            <div className="contact__form-div">
              <input name= "email" type="email" className="contact__form-input" 
              placeholder='Insert your email'/>
            </div>
          </div>

          <div className="contact__form-div">
              <input name="subject" type="text" className="contact__form-input" 
              placeholder='Insert your subject'/>
          </div>

          <div className="contact__form-div contact__form-area">
              <textarea name="msg" 
              id="" 
              cols="30" 
              rows="10" 
              className="contact__form-input" 
              placeholder="Write your message"></textarea>
          </div>

          <button className="btn" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact