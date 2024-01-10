import React from 'react'
import PropTypes from 'prop-types';
import productImg from '../../assets/images/food02.jpg'

export default function GallaryImage({gallaryUrl, gallaryPhotoName}) {
  const renderImage = (
    <img src={gallaryUrl} alt='food image1'/>
  )
  const renderItemName = (
        <div className='itemNameOnHover'>
            <h5 className='itemName'>{gallaryPhotoName}</h5>
        </div>    
  )

  const renderGalaryFrame = (
    <a href={'/'} className='gallaryFrame'>
        {renderImage}
        {renderItemName}
  </a>    
  )

  return (
      <>
        {(renderImage && renderItemName)?renderGalaryFrame:''}
      </>
  )
}

GallaryImage.defaultProps  = {
  gallaryUrl: productImg,
  gallaryPhotoName: 'Kuch v product name'

}

GallaryImage.prototype = {
  gallaryUrl: PropTypes.string.isRequired,
  gallaryPhotoName: PropTypes.string.isRequired
}