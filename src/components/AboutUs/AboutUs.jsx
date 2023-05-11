import React from 'react'
import PageTitle from '../PageTitle/PageTitle'
import image from '../../images/Rectangle 108.png'
import './aboutUs.css'
import './aboutUsMobile.css'
function AboutUs() {
  return (
    <div className='aboutUs'>
      <div className="container">
         <PageTitle content={'Haqqımızda'}/>
         <div className="aboutUs__wrapper">
            <div className="aboutUs__image">
               <img src={image} alt="" />
            </div>
            <div className="aboutUs__desc">
               <p>
                  AliAS Group kiçik, orta və iri müəssisələr üçün vergi risklərini azaldır və şirkətlərin yoxlamalara hazırlaşmasına kömək edir. Analoq vergi yoxlaması zamanı mütəxəssislər riskləri təhlil edirlər. Mütəxəssislər VO ilə eyni metodlardan istifadə edirlər. Bu, vergi uçotundakı zəif tərəfləri aşkarlamağa, onları düzəltməyə və həqiqi bir yoxlamanı itkisiz keçirməyə kömək edir.
                  Vergi yoxlamasına ciddi hazırlıq sənayenin orta səviyyəsində qiymətləndirilməmiş vergi yükünü göstərən, tez-tez dəqiqləşdirilmiş hesabat təqdim edən, xüsusi rejimlərdən istifadə edən və ya təqdim etdikləri sənədlərdə zərər və çıxılmaları çox göstərən şirkətlər üçün lazımdır. Şirkətin yaxınlaşan yoxlama zamanı itkiləri minimuma endirmək üçün ALiAS Group mütəxəssislərinin xidmətlərindən istifadə etməyi məsləhət görürük. Bu, xüsusən illik audit yoxlamalara məhəl qoymayan şirkətlər üçün doğru seçimdir.
               </p>
               <div className="aboutUs__desc__button">
                  <button>
                     ƏLAQƏ
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default AboutUs
