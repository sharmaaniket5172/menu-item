import React from 'react'
import PageTitle from '../../components/common/PageTitle'
import Category from '../../components/common/Category'
import GetInTouch from '../../components/common/GetInTouch'


import foodImg1 from '../../assets/images/hote-food-img-01.jpg'
import foodImg2 from '../../assets/images/hote-food-img-02.jpg'
import foodImg3 from '../../assets/images/hote-food-img-03.jpg'

export default function Menu() {
  return (
    <>
      <PageTitle title={'Menu Categories'}/>
      <section className='common-section our-menu-section'>
        <div className='container text-center'>
            <h4 className='pageHeader'>We offer a variety of delicious, seasonal menus that are rooted in West Coast flavours, with an emphasis on fresh, local, sustainable ingredients.</h4>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                   <Category imgsrc={foodImg1} title={'Corporate Catering'} catUrl={'/menu-category/menu-details'}/> 
                </div>
                <div className='col-4'>
                   <Category imgsrc={foodImg2} title={'OFC Lunch and Dinner'} catUrl={'/'}/> 
                </div>
                <div className='col-4'>
                   <Category imgsrc={foodImg3} title={'Packed meals'} catUrl={'/'}/> 
                </div>                              
            </div>
        </div>
    </section>      
    <GetInTouch/>
    </>
  )
}