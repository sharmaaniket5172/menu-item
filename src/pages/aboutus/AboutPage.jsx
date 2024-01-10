import React from 'react'
import PageTitle from '../../components/common/PageTitle'
import aboutusimg from '../../assets/images/about_img.jpg';
import GetInTouch from '../../components/common/GetInTouch';



const AboutPage = ()=> {
  return (
    <>
          <PageTitle title={'About Us'}/>
          <div className='container'>
              <div className='about-us-wrapper'>
                  <div className='aboutUs-right-img'>
                    <img src={aboutusimg} alt='about us image' />
                  </div>
                  <div className='about-us-content'>
                      <h3 className='pageHeader'>Welcome to ABC, a premier cater-ing and event planning company in New York, USA.</h3>
                      <p className='description'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                  </div>
              </div>
          </div>
          <GetInTouch/>
    </>
  )
}


export default AboutPage