import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone  } from '@fortawesome/free-solid-svg-icons';
import PageTitle from '../Title/PageTitle';
import './contact.css'
import './contactMobile.css'
function Contact() {
  return (
    <div className='contact'>
      <div className="container">
         <PageTitle content={'Əlaqə'}/>
         <div className="contact__wrapper">
            <div className="contact__info">
              <div className="contact__title">
                Alias Group  
              </div>
              <div className="contact__info__datas">
                <div className="contact__adress">
                  <div className="contact__adress__icon">
                    <FontAwesomeIcon icon={faMapMarker} />
                  </div>
                  <div>
                    Bakı şəh., Nərimanov r-nu, X.Şuşinski ilə M.Sənani küçələrinin kəsişməsi (Bina MTK)
                  </div>
                </div>
                <div className="contact__numbers">
                  <div className="contact__numbers__icon">
                  <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <div>(994) 12 480 10 22</div>
                    <div>(994) 55 281 86 84</div>
                  </div>
                </div>
              </div>
              <div className="contact__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11988512.0375751!2d-4.521519649999986!3d42.811962199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13318d12e13a1671%3A0x47a47530df2f8a64!2sAlias%20Group%20S.r.l.!5e0!3m2!1saz!2saz!4v1683831525914!5m2!1saz!2saz"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="contact__form">
              <form action="">
                <div className="contact__title">
                  Müraciət forması
                </div>
                <div className='contact__form__field'>
                  <label htmlFor="">Məzmun</label>
                  <input placeholder='Müraciətin məzmunu' type="text" />
                </div>
                <div className='contact__form__field'>
                  <label htmlFor="">E-mail</label>
                  <input placeholder='youremailhere@gmail.com' type="email" />
                </div>
                <div className='contact__form__field'>
                  <label htmlFor="">Əlaqə nömrəsi</label>
                  <input type="text" />
                </div>
                <div className='contact__form__field'>
                  <label htmlFor="">Rəyiniz</label>
                  <textarea placeholder='Məlumat daxil edin'></textarea>
                </div>
                <div>
                  <button>
                    GÖNDƏR
                  </button>
                </div>
              </form>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Contact
