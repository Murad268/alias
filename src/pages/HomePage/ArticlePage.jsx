import React, {useEffect} from 'react'
import Articles from '../../components/Articles/Articles'
import { loadArticles, loadCount } from '../../store/actions/loadActions';
import { useSelector, useDispatch } from 'react-redux';
function ArticlePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadArticles())
    dispatch(loadCount())
  }, [])
  const articles = useSelector(state => {
    const {articleReducers} = state

    return articleReducers.articles
 })
  return (
    <div>
      <Articles articles={articles}/>
    </div>
  )
}

export default ArticlePage
