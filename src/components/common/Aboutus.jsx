import React from 'react'
import SectonTitle from '../common/SectonTitle';
import Button from '../common/Button';
import aboutusimg from '../../assets/images/about-us.jpg';

export default function Aboutus() {
  return (
    <section className='about-us-section common-section'>
        <div className='container'>
            <div className='wrapper'>
            <SectonTitle title={'About Us'}/>
            
            <div className='aboutusimg'>
                <img src={aboutusimg} alt=''/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend magna eget erat mollis, quis dignissim lorem feugiat. Fusce elementum dolor lacus, eget pharetra turpis semper eget. Nullam non neque at diam bibendum ornare. Fusce in nulla aliquet est vestibulum pulvinar nec vitae diam. Fusce ornare, tortor vitae</p>
            
            <Button url={'#'} text={'readme'} addclassname={'text'}/>      
            </div>
 
        </div>

    </section>
  )
}
