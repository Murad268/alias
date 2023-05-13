import React from 'react'
import PageTitle from '../Title/PageTitle';
import ErBlock from '../../assets/icons/ErBlock/ErBlock';
import './services.css';
import './servicesMobile.css';
function Services() {
  return (
    <div className='services'>
      <div className="container">
         <PageTitle content={'Xidmətlər'}/>
         <div className="services__wrapper">
            <ErBlock/>
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

export default Services
