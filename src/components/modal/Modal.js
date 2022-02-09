import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './modal.scss';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0}

}


const modal = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    vissible: {
        y: '150px',
        opacity: 1,
        transition: { delay: 0.5}
    }
}




const Modal = ({ showModal, setShowModal, handleClose }) => {
    return (
        <AnimatePresence exitBeforeEnter> 
            { showModal && (
                <motion.div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 1
                }}
                   variants={backdrop}
                   initial='hidden'
                   animate={'visible'}
                   >
                       <motion.div 
                        variants={modal}
                        initial='hidden'
                        animate='vissible'
                        exit='hidden'
                       
                           style={{
                           width: 'clamp(50%, 700px, 90%)',
                           height: 'min(50% 300px)',
                           background: 'crimson',
                           margin: ' auto',
                           padding: '0 2rem',
                           borderRadius: '12px',
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center'
                           
                       }}>
                        <p style={{
                            color: 'white',
                            fontWeight: 'bold',
                            marginTop: '1rem',
                            
                        }}>Por favor, completá todos los campos</p>
                        <button className='button' onClick={() => setShowModal(false)}>Ok</button>
                       </motion.div>

                </motion.div>
            ) }
        </AnimatePresence>
    )
}

export default Modal;