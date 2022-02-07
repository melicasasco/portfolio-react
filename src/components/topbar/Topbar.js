
   
import "./Topbar.scss";
import { GitHub, LinkedIn } from "@material-ui/icons";
import { motion } from "framer-motion"


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <motion.div 
    initial={{ y: -250 }}
    animate={{ y: -10 }}
    transition= {{ delay: 0.2, type: 'spring', stiffness: 120 }}
    
    className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Melanie Casasco
          </a>
          <div className="itemContainer">
            <a style={{textDecoration:'none'}} href="https://github.com/melicasasco">
              <GitHub className="icon" />
              <span>Github</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/melanie-casasco/">
            <LinkedIn className="icon" />
            <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}