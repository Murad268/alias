import React from 'react'
import PageTitle from '../Title/PageTitle'
import ErBlock from '../../assets/icons/ErBlock/ErBlock'
import './legislation.css'
import './legislationMobile.css'
function Legislation() {
  return (
    <div className='legislation'>
      <div className="container">
         <PageTitle content={'Qanunvericilik'}/>
         <div className="legislation__wrapper">
            <ErBlock/>
            <ErBlock/>
            <ErBlock/>
            <ErBlock/>
            <ErBlock/>
         </div>
      </div>
    </div>
  )
}

export default Legislation
