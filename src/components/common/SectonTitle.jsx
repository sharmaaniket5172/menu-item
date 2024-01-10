import React from 'react'
import PropTypes from 'prop-types';

export default function SectonTitle({title,customClass}) {
  if(title)  
  return (
    <h1 className={`main-title ${customClass?customClass:''}`}>
        {title}
    </h1>
  )
}

SectonTitle.prototype = {
    title: PropTypes.string.isRequired
}