import './Intro.scss';
import { useEffect, useRef } from "react";
import { init } from "ityped";

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
      <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/me.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>¡Hola!</h2>
            <h1>Soy Meli</h1>
            <h3>
              Jr <span ref={textRef}></span>
            </h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    );
  }