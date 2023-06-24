import React from 'react'
import './mission.css';
import BADGE from  '../../assets/badge3-transparent.png';
import {MdSpeakerNotes} from 'react-icons/md';


const Mission = () => {
  return (
    <section className="mission">
      <h2 className='fade-in'>Our Mission</h2>

      <div className="container mission_container">

        <div className="mission_left">
          <div className='top'>
            <h1 className='fade-in'>O.A.M.S</h1>
            <img src={BADGE} alt="Mission" className='badge'/>
          </div>
          <a href="#about" className='btn btn-primary'>Read More</a>
        </div>

        <div className="mission_right">

          <article className="mission_right-info fade-in">
            <div className="mission-icon">
              <MdSpeakerNotes/>
            </div>
            <h5>Our Mission</h5>
            <p className="writtings">
              Our mission is to promote decent and relevant education to all Ghanaians at the basic level by using good methodology to teach the student to develop their physical, mental and spiritual being
            </p>
          </article>

          <article className="mission_right-info fade-in">
            <div className="mission-icon">
              <MdSpeakerNotes/>
            </div>
            <h5>Our Vision</h5>
            <p className="writtings">
              Our vision is to be one of the best basic schools in the Ga central municipality where excellent education and methodology including discipline will be imparted by well trained and professional tutors to students.
            </p>
          </article>

          <article className="mission_right-info fade-in">
            <div className="mission-icon">
              <MdSpeakerNotes/>
            </div>
            <h5>Our Core Values</h5>
            <p className="writtings">
              Our mission is to promote decent and relevant education to all Ghanaians at the basic level by using good methodology to teach the student to develop their physical, mental and spiritual being
            </p>
          </article>

        </div>
      </div>
    </section>
  )
}

export default Mission