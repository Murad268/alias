import React from 'react'
import { Audio } from 'react-loader-spinner'

function Loader() {
   return (
      <Audio
      height="200"
      width="200"
      radius="9"
      color="#20287C"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
   />
  )
}

export default Loader
