import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './collabarator.css'
function Collabarator({collabarator}) {
   console.log(collabarator)
  return (
    <div className='collabarator'>
      <div className="collabarator__image">
         <img src={collabarator.src} alt="" />
      </div>
      <div className="collabarator__body">
         <div className="collabarator__name">
            {collabarator.name}
         </div>
         <div className="collabarator__position">
            {collabarator.position}
         </div>
         <div className="collabarator__link">
            <a href="">
               <span>ƏTRAFLI</span> <FontAwesomeIcon icon={faAngleRight}/>
            
            </a>
         </div>
      </div>
    </div>
  )
}

export default Collabarator
