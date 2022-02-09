import Topbar from "./components/topbar/Topbar";
import Intro from './components/intro/Intro';
import SobreMi from './components/sobremi/Sobremi';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Menu from "./components/menu/Menu";
import './app.scss';
import { useState } from 'react';
import Modal from './components/modal/Modal';
import { motion, AnimatePresence } from 'framer-motion';

function App() {

  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState (false);
  return (

    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <div className="sections">
       <Modal showModal={showModal} setShowModal={setShowModal} />
       <AnimatePresence exitBeforeEnter onExitComplete={() => {setShowModal(false)}}>
        <Intro/>
        <SobreMi />
        <Portfolio  />
        <Contact setShowModal={setShowModal} />
        </AnimatePresence>
     </div>
    </div>

  );
}

export default App;
