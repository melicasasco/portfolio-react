
   
import "./Topbar.scss";
import { GitHub, LinkedIn } from "@material-ui/icons";


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
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
    </div>
  );
}