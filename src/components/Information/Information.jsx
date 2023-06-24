import React from 'react'
import './info.css';
import KIDS from '../../assets/header.svg';

const Information = () => {
  return (
    <section className="Info_sec">
      <h2 className='fade-in'>The OAMS Family</h2>

      <div className="container info_container">
          <div className="info_left">
            <h1 className='fade-in'>Why Choose OAMS</h1>
            <p className='fade-in'>
              Choosing the right school for your children is one of the most important decisions that you will ever make. We know how important it is to find the right school. School days should be filled with happiness, fun, laughter and a sense of achievement.This is why our students flourish and are so happy here with us. Nothing beats seeing and experiencing our School in action, so we encourage all prospective parents and pupils to visit Ofosu Amoako and talk to staff and students; this helps confirm that we really are the right school.
            </p>
            <div><a href="contact.html" className='btn btn-primary'>Enroll Now</a></div>
          </div>
      <div className="info_right">
          <img src={KIDS} alt="Kids" />
      </div>
      </div>
      
    </section>
  )
}

export default Information