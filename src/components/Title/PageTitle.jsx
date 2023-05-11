import React from 'react'
import './pageTitle.css'
function PageTitle({content}) {
  return (
    <h1 className='pageTitle'>
      {content}
    </h1>
  )
}

export default PageTitle
