import React from 'react';
/* import FaqFooter from '../../FaqStyle/FaqFooter/FaqFooter' */

const Footer = () => {
    return (
        <footer>
            <div className="footer bg-secondary">
            <span className='color-white'>@FaqToff</span>
            <div className="btn-social-desk">
                <a className="btn-social color-white" href="https://www.linkedin.com/in/faqtoff" target="blank"><i className="fab fa-linkedin"></i></a>
                <a className="btn-social color-white" href="https://github.com/faqtoff" target="blank"><i className="fab fa-github"></i></a>
                <a className="btn-social color-white" href="#" target="blank"><i className="fab fa-facebook-square"></i></a>
                <a className="btn-social color-white" href="https://www.instagram.com/faqtoff/" target="blank"><i className="fab fa-instagram"></i></a>
            </div>
            </div>
            {/* <FaqFooter /> */}
        </footer>
    )
}

export default Footer
