import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import img from '../../images/Rectangle 122.png';
import './Article.css';

const Article = ({article}) => {
   return (
      <div className='article'>
         <div className="article__image">
            <img src={img} alt="" />
         </div>
         <div className="article__title">
            {article.title.length > 62?article.title.slice(0, 62):article.title}
         </div>
         <div className="article__subtitle">
            {article.content.length > 120?article.content.slice(0, 120):article.content}
         </div>
         <div className="article__link">
            <a href="">
               ƏTRAFLI <FontAwesomeIcon icon={faAngleRight} />
            </a>
         </div>
      </div>
   );
};

export default Article;