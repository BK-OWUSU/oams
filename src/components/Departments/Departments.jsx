import React from 'react'
import './departments.css';
import IMG1 from '../../assets/oams/imgA.jpg';
import IMG2 from '../../assets/oams/picA.jpg';
import IMG3 from '../../assets/oams/imgBB.jpg';
import IMG4 from '../../assets/oams/picB.jpg';

const Departments = () => {
  return (
    <section className="departments">
      <h2 className="fade-in">Departments</h2>

      <div className="container department_container">
        
        {/* Articles */}
        <article className="department fade-in">
          <div className="department_img">
            <img src={IMG1} alt="students" />
          </div>
          <div className="department_info">
            <h4>Pre-School</h4>
            <p>
            Ofosu Amoako School is a happy and fun place for our very youngest children.
            Children from 3 months-old and over are nurtured within a safe and secure environment.
            </p>
          </div>
        </article>

        {/* Articles */}
        <article className="department fade-in">
          <div className="department_img">
            <img src={IMG2} alt="students" />
          </div>
          <div className="department_info">
            <h4>Lower-Primary</h4>
            <p>
            There is a palpable buzz right across the Pre-Prep as our excited and inspired learners 
            (aged 4 to 7) bounce into School to enjoy wonderful days packed with opportunities.
            </p>
          </div>
        </article>

        {/* Articles */}
        <article className="department fade-in">
          <div className="department_img">
            <img src={IMG3} alt="students" />
          </div>
          <div className="department_info">
            <h4>Upper-Primary</h4>
            <p>
            The Upper Primary provides children aged 7-11 with the opportunity to develop a life-long love of learning. Children benefit from small class sizes and an exciting inquiry-based curriculum.
            </p>
          </div>
        </article>

        {/* Articles */}
        <article className="department fade-in">
          <div className="department_img">
            <img src={IMG4} alt="students" />
          </div>
          <div className="department_info">
            <h4>Junior-High-Shcool</h4>
            <p>
            Ofosu Amoako is a wonderfully enriching Junior School environment. Each year is its own phase 
            and is carefully structured to nurture independence and develop a lifelong love of learning.
            </p>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Departments