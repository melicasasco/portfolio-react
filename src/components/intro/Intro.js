import './Intro.scss';
import { useEffect, useRef } from "react";
import { init } from "ityped";
import { motion } from "framer-motion"

export default function Intro() {
    const textRef = useRef();
  
    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Frontend Developer", "Content Creator"],
      });
 }, []);
  
    return (
      <div 
      className="intro" id="intro">
        <div className="left">
          <motion.div
          initial={{opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ delay: 1.5, duration: 1.5}}
          
          className="imgContainer">
            <img src="assets/me.png" alt="" />
          </motion.div>
        </div>
        <div className="right">
          <motion.div
          
          initial={{opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ delay: 1.5, duration: 3}}
          className="wrapper">
            <h2 
          
            >¡Hola!</h2>
            <h1 
            >Soy Meli</h1>
            <h3>
              Jr <span ref={textRef}></span>
            </h3>
          </motion.div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    );
  }