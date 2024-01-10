import React from 'react'
import PropTypes from 'prop-types';


export default function Category({catUrl, imgsrc,title}) {

const renderCategory = (
    <a href={catUrl} className='imageWrapper'>
        <div className='imageInnerWrapper'>
            <img src={imgsrc} alt={title}/>
        </div>
        <div className='menu-title'>
             <h5 className='renderMenuName'>{title}</h5>
        </div>
    </a>
);
  return (
    <div className='food-menu'>
        {renderCategory}                                           
    </div>
  )
}


Category.prototype = {
    imgsrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    catUrl: PropTypes.string.isRequired,
}
  