import React from 'react'
import Button from './Button'

export default function GetInTouch() {
  return (
    <section className='getInTouch-Section'>
    <div className='container'>
        <div className='getInTouchWrapper'>
              
             <Button url={'/contact-us-page'} text={'Get In Touch'} addclassname={'getIntouchBtn btn-xlg'}/>   
             <h2 className='getInTouch-content'>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
             </h2>
        </div>
    </div>
  </section>
  )
}
