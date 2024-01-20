import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Category({catUrl, imgsrc,title}) {

const renderCategory = (
    <Link to={catUrl} className={'imageWrapper'}>
        <div className='imageInnerWrapper'>
            <img src={imgsrc} alt={title}/>
        </div>
        <div className='menu-title'>
             <h5 className='renderMenuName'>{title}</h5>
        </div>
    </Link>
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
  