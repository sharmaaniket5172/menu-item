import React from 'react'
import GallaryImage from './GallaryImage'
import SectonTitle from './SectonTitle'

import imagepath1 from '../../assets/images/hote-food-img-02.jpg'
import imagepath2 from '../../assets/images/hote-food-img-08.jpg'
import imagepath3 from '../../assets/images/hote-food-img-03.jpg'
import imagepath4 from '../../assets/images/hote-food-img-04.jpg'
import imagepath5 from '../../assets/images/hote-food-img-05.jpg'
import imagepath6 from '../../assets/images/hote-food-img-06.jpg'
import imagepath7 from '../../assets/images/hote-food-img-07.jpg'

export default function OurGallary() {
  return (
    <section className='common-section secton-gallary'>
        <div className='container'>
            <SectonTitle title={'Our Food Gallery'} customClass={'text-center'}/>
            <div className='galleryWrappGrid'>
               <GallaryImage gallaryUrl={imagepath1} gallaryPhotoName={'Steak with Cucumbers'}/>
               <GallaryImage gallaryUrl={imagepath2} gallaryPhotoName={'Steak with Cucumbers'}/>
               <GallaryImage gallaryUrl={imagepath3} gallaryPhotoName={'Steak with Cucumbers'}/>
               <GallaryImage gallaryUrl={imagepath4} gallaryPhotoName={'Steak with Cucumbers'}/>
               <GallaryImage gallaryUrl={imagepath5} gallaryPhotoName={'Steak with Cucumbers'}/>
               <GallaryImage gallaryUrl={imagepath6} gallaryPhotoName={'Steak with Cucumbers'}/>
               <GallaryImage gallaryUrl={imagepath7} gallaryPhotoName={'Steak with Cucumbers'}/>
            </div>
        </div>
    </section>
  )
}
