import './Contact.scss';
import emailjs from "emailjs-com";
import { useContext, useRef, useState } from "react";

export default function Contact() {
    const formRef = useRef();
    const [done, setDone] = useState(false)

  
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_9c2v0ot",
            "template_ojpt0op",
            formRef.current,
            "user_Rdaa9pUbNIqZOIXsb5TbT"
          )
          .then(
            (result) => {
              console.log(result.text);
              setDone(true)
            },
            (error) => {
              console.log(error.text);
            }
          ); 
      };

    return (
      <div className="contact" id="contact">
        <div className="left">
          <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
          <h2>Contacto</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "¡Gracias!"}
          </form>
        </div>
      </div>
    );
  }