import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';
import Article from '../Article/Article';
import Loader from '../Loader/Loader';
import Empty from '../Empty/Empty';
import PageTitle from '../Title/PageTitle';
import { loadPage } from '../../store/actions/loadActions';
import { useDispatch, useSelector } from 'react-redux';
import './Articles.css';
import './articlesMobile.css';
const Articles = ({articles}) => {
   const [pageNumber, setPageNumber] = useState(0);
   const countOfArticles = useSelector(state => {
      return state.articleReducers.countOfArticles
   })
   const dispatch = useDispatch()
   const itemsPerPage = 6;

   const pageCount = Math.ceil(countOfArticles / itemsPerPage);


   const loadstart = useSelector(state => {
      return state.articleReducers.start
   })

   return (
      <div className="container">
         <PageTitle content='Məqalələr'/>
  
         <div className='articles__wrapper'>
            {
               articles.length<1?
               <Empty/>
               :
               articles?.map(article => {
                  return <Article article={article} key={article.id}/>
               })
            }
            {
               articles.length>1?
                  <ul className="pagination">
                     <ReactPaginate
                        previousLabel={'prev'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={(e) => dispatch(loadPage(e.selected))}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                     />
                  </ul>
                  :null
            }
            {
               loadstart?
               <Loader/>
               :null
            }

         </div>
   
      </div>
   );
};

export default Articles;