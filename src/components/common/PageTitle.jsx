import React from 'react'
import TitleBanner from '../../assets/images/global_bc.jpg';
import PropTypes from 'prop-types';
import Breadcrumbs from './Breadcrumbs';

export default function PageTitle({title}) {
    const renderTitle = (
            <section className='page-title' >
                <div className='container text-center'>
                    <h1 className='page-tile'>{title}</h1>
                    <Breadcrumbs />
                </div>
                <div className='banner_img' style={{backgroundImage: `url(${TitleBanner})`}}></div>
                
            </section>
    )
  return (
    <>
        {title? renderTitle : ''}
    </>
  )
}


PageTitle.prototype = {
    title: PropTypes.string.isRequired,
}