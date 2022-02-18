import './Contact.scss';
import emailjs from "emailjs-com";
import { useContext, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";


export default function Contact( { setShowModal }) {


    useEffect(() => {
      setTimeout(() => { 
        setShowModal()
      }, 5000)
    }, [])

    const formRef = useRef();
    const [done, setDone] = useState(false)

    const [name, setName] = useState("");
    const [subject, setSubject] = useState("")
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")

   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({name});
        console.log({subject});
        console.log({email});
        console.log({message});
        if (name==="" || email==="" || message==="") {
         setShowModal(true);
        } 
        else {
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
              e.target.reset();
            },
            (error) => {
              console.log(error.text);
            }
          ); 
          
        }
       
      };

    return (
      <div className="contact" id="contact">
        <div className="left">
          <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
          <h2>Contacto</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
             />
            <input  type="text" placeholder="Subject" name="user_subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <input type="text" placeholder="Email" name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <textarea rows="5" placeholder="Message" name="message" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}/>
            <motion.button
            whileHover={{scale: 0.9}}
            >Submit</motion.button>
            {done && "¡Gracias!"}
          </form>
        </div>
      </div>
    );
  }