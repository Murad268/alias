import React from 'react'
import Link from './Link/Link';
import './Header.css';
import './headerMobile.css';
import logo from '../../assets/icons/footer/Group 3318.png';
import searchLogo from '../../assets/icons/header/Huge-icon.png';
function Header() {
  return (
    <header className="header">

         <div className="header__wrapper">
            <div className="header__logo">
               <a href="">
                  <img src={logo} alt="" />
               </a>
            </div>
            <div className="header__buttons">
               <div className="header__links">
                  <ul>
                     <Link title={'Ana səhifə'}/>
                     <Link title={'Haqqımızda'}/>
                     <Link title={'Xidmətlər'}/>
                     <Link title={'Vakansiyalar'}/>
                     <Link title={'Qanunvericilik'}/>
                     <Link title={'Məqalələr'}/>
                     <Link title={'Əməkdaşlar'}/>
                     <Link title={'Əlaqə'}/>
                  </ul>
               </div>
               <div className="header__searchButton">
                  <img src={searchLogo} alt="" />
               </div>
            </div>
         </div>

    </header>
  )
}

export default Header
