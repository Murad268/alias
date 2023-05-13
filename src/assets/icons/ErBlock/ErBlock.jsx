import React from 'react'
import './erBlock.css'
import './erBlockMobile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import img from '../../../images/Rectangle 110 (1).png'
function ErBlock() {
  return (
    <div className='erBlock'>
      <img src={img} alt="" />
      <div className="erBlock__body">
         <div className="erBlock__body__top">
            <div className="erBlock__body__top__num">01</div>
            <div className="erBlock__body__top__name">Audit</div>
         </div>
         <div className="erBlock__footer">
            <hr />
            <div className="erBlock__body__link">
               <a href="">
                  <span>Ətraflı</span>
                  <FontAwesomeIcon icon={faAngleRight}/>
               </a>
            </div>
         </div>
      </div>
    </div>
  )
}

export default ErBlock
