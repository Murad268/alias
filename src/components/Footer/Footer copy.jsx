import React from 'react'
import Number from './Number/Number'
import logo from '../../assets/icons/footer/Group 3318.png'
import location from '../../assets/icons/footer/Huge-icon.png'
import phone from '../../assets/icons/footer/Huge-icon (1).png'
import './Footer.css';
import './footerMobile.css';
function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__wrapper">
         <div className="footer__top">
            <div className="footer__logo">
               <img src={logo} alt="" />
            </div>
            <div className="footer__contacts">
               <div className="footer__adress">
                  <div className="footer__adress__logo">
                     <img src={location} alt="" />
                  </div>
                  <div className="footer__adress__name">
                  Bakı şəh., Nərimanov r-nu, X.Şuşinski ilə M.Sənani küçələrinin kəsişməsi (Bina MTK)
                  </div>
               </div>
               <div className="footer__numbers">
                  <div className="footer__numbers__logo">
                     <img src={phone} alt="" />
                  </div>
                  <div className="footer__numbers__names">
                     <Number/>
                     <Number/>
                  </div>
               </div>
            </div>
         </div>
         <div className="footer__bottom">
            <div className="footer__copywrither">
               Copyright © 2020 ALiAS Group - Bütün hüquqlar qorunur.
            </div>
            <div className="footer__bottom__links">
               <a className='footer__bottom__link' href="">Privacy Policy</a>
               <a className='footer__bottom__link' href="">Terms of use</a>
            </div>
         </div>
      </div>
    </footer>
  )
}

export default Footer
