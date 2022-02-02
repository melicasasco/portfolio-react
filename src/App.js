import Topbar from "./components/topbar/Topbar";
import Intro from './components/intro/Intro';
import SobreMi from './components/sobremi/Sobremi';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Menu from "./components/menu/Menu";



import './app.scss';
import { useState } from 'react';

function App() {

  const [menuOpen, setMenuOpen] = useState (false);
  return (

    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <div className="sections">
        <Intro/>
        <SobreMi />
        <Portfolio  />
        <Contact />

     </div>
    </div>

  );
}

export default App;
