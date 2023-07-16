import './sobremi.scss';
import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const SobreMi = () => {

const {ref, inView } = useInView({
  threshold: 0.2
});
const animation = useAnimation();



useEffect(()=> {
  console.log('use Effect hook, inView = ', inView);
  if(inView) {
    animation.start ({
      x: 0,
      transition: {
        type: 'delay: 400, duration: 2000'
      }

    });
  }
  if(!inView) {
    animation.start( {x: '80px'})
  }

}, [inView]);

    return (
      <div ref={ref}
      className="a" id="sobremi">
        <div className="a-left">
          <div className="a-card">
            <img
              src="assets/img-code.jpg"
              alt=""
              className="a-img"
            />
          </div>
        </div>
        <motion.div 
       animate={animation}
        className="a-right">
          <h1 className="a-title">Sobre mí</h1>
          <p className="a-sub">
            Me dicen Meli,
          </p>
          <p 
          className="a-desc">
          soy una persona <span style={{color: 'rgb(105, 202, 202)'}}>organizada y con una gran motivación</span>, apasionada por el <b>diseño</b> y la <b>tecnología.</b><br></br> Como egresada en Artes, <span style={{color: 'rgb(105, 202, 202)'}}>mi devoción por la pintura 
          y el diseño </span>me llevó a indagar sobre la materia en el ámbito digital. <br></br>
          Actualmente me encuentro trabajando como Frontend Developer Jr en <a href='https://winguweb.org/' target='_blank' rel='noreferrer' style={{color: 'rgb(105, 202, 202)', textDecoration: 'none', fontWeight: '600'}}>Wingu</a> y en <a href='http://beinspiringtools.com/' target='_blank' rel='noreferrer' style={{color: 'rgb(105, 202, 202)', textDecoration: 'none', fontWeight: '600'}}>Be Inspiring Tools</a> dando soporte web y de diseño.
         
          </p>
          
        </motion.div>
      </div>
    );
  };
  
  export default SobreMi;
