import Slider from '../../components/common/Slider'
import Aboutus from '../../components/common/Aboutus'
import OurGallary from '../../components/common/OurGallary'
import Category from '../../components/common/Category';
import SectonTitle from '../../components/common/SectonTitle';
import 'react-quill/dist/quill.snow.css';


import foodImg1 from '../../assets/images/hote-food-img-01.jpg';
import foodImg2 from '../../assets/images/hote-food-img-02.jpg';
import foodImg3 from '../../assets/images/hote-food-img-03.jpg';

export default function HomePage() {
  return (
    <>
    <Slider/>
    <Aboutus/>
    <section className='common-section our-menu-section'>
        <div className='container'>
            <SectonTitle title={'Our Menu'} customClass={'text-center'}/>
            <div className='row'>
                <div className='col-4'>
                   <Category imgsrc={foodImg1} title={'Corporate Catering'} catUrl={'/'}/> 
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
    <OurGallary/>
    </>
  )
}
 