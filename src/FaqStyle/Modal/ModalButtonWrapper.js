import React, { useEffect, useState } from 'react';
import Modal from './Modal';


const ModalButtonWrapper = ({buttonText, children, className, bgClose, open, classNameModal, alCerrar }) => {
    const [visible, setVisible] = useState(false);
    const [classNameM, setclassNameM] = useState('')

    useEffect(() => {
        open&& setVisible(true)
        classNameModal&& setclassNameM(classNameModal)
    }, [])
    
    const onButtonClick = () => {
        setVisible(true);
    };

    const onClose = () => {
        open=false
        setVisible(false);
    };

    return (
        <div className={"modal-button-wrapper "} onSubmit={onButtonClick}>
            <button className={className} onClick={onButtonClick} >{buttonText}</button>
            <Modal visible={visible} alCerrar={alCerrar} className={classNameM} onClose={onClose} bgClose={bgClose}>
                <div className='scroll'>{children}</div>
            </Modal>
        </div>
    );
}

export default ModalButtonWrapper;