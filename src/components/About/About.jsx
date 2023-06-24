import React from 'react';
import './about.css';
import ACHIEVE_IMG from '../../assets/about achievements.svg';
import {IoMdContacts} from 'react-icons/io';
import {GiMedal, GiStarMedal} from 'react-icons/gi';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import {FiFacebook} from 'react-icons/fi';
import {FiTwitter} from 'react-icons/fi';
//Teachers
import Aquah from '../../assets/oams/Teach-Acquah.jpg';
import Ewurama from '../../assets/oams/Teach-Ewrama.jpg';
import Clement from '../../assets/oams/Teach-Clement.jpg';
import Silvia from '../../assets/oams/Teach-Silvia.jpg';
import Vida from '../../assets/oams/Teach-Twi.jpg';
//End

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="fade-in">About Us</h2>
        <div className="container about_container">
          
          <div className="achievement">
            <div className="achievement_left">
              <img src={ACHIEVE_IMG} alt="Acheivement_img" />
            </div>
            <div className="achievement_right">
              <div className="achievement_top">
                <h3>Achievements</h3>
                <p className='fade-in'>
                We have managed to build a stable educational system that provides a safe and condusive learning space and environment for leaners. We also have a team of enthusiatic tutotors, who are constantly sharing new ideas through regular creative workshops to keep their lessons juicy and fun.
                </p>

              <div className="achievement_top-cards">
                <article className='fade-in'>
                  <span><IoMdContacts className='achieve-icons'/></span>
                  <h4>500+</h4>
                  <p>Leaners</p>
                </article>

                <article className='fade-in'>
                  <span><GiMedal className='achieve-icons'/></span>
                  <h4>20+</h4>
                  <p>Awards</p>
                </article>

                <article className='fade-in'>
                  <span><IoMdContacts className='achieve-icons'/></span>
                  <h4>500+</h4>
                  <p>Leaners</p>
                </article>

              </div>
              </div>
              <div className="our_advantage">
                  <h3>Our Advantage</h3>
                  
                <div className="advantage_info">
                  <article className='fade-in'>
                    <span><GiStarMedal/></span>
                    <p>Among the best in BECE yearly</p>
                  </article>
                  
                  <article className='fade-in'>
                    <span><GiStarMedal/></span>
                    <p>Excellent Infrastructure</p>
                  </article>
                  
                  <article className='fade-in'>
                    <span><GiStarMedal/></span>
                    <p>Affordable Fees</p>
                  </article>
                  
                  <article className='fade-in'>
                    <span><GiStarMedal/></span>
                    <p>Standard Carriculumn and etc.</p>
                  </article>
                </div>

              </div>
            </div>
          </div>

          <div className="our_staff">
              <h3>Meet Our Staff</h3>
              <div className="our_staff-content">
                {/* Article */}
                <article className="staff_members fade-in">
                  <div className="staff_member_image">
                    <img src={Aquah} alt="Mr. Acquah" />
                  </div>
                  <div className="staff_member_info">
                    <h4>Acquah Akwesi</h4>
                    <p className='writtings'>HOD</p>
                  </div>
                  <div className="staff_member_socials">
                   <a href="https://www.whatapp.com"><AiOutlineWhatsApp/></a> 
                   <a href="https://www.facebook.com"><FiFacebook/></a> 
                   <a href="https://www.twitter.com"><FiTwitter/></a>
                  </div>
                </article>

                {/* Article */}
                <article className="staff_members fade-in">
                  <div className="staff_member_image">
                    <img src={Ewurama} alt="Mrs Aikins" />
                  </div>
                  <div className="staff_member_info">
                    <h4>Aikins-Bekoe Ewurama</h4>
                    <p className='writtings'>Administrator</p>
                  </div>
                  <div className="staff_member_socials">
                   <a href="https://www.whatapp.com"><AiOutlineWhatsApp/></a> 
                   <a href="https://www.facebook.com"><FiFacebook/></a> 
                   <a href="https://www.twitter.com"><FiTwitter/></a>
                  </div>
                </article>

                {/* Article */}
                <article className="staff_members fade-in">
                  <div className="staff_member_image">
                    <img src={Silvia} alt="Mrs. Silvia" />
                  </div>
                  <div className="staff_member_info">
                    <h4>Silvia</h4>
                    <p className='writtings'>Pre-School Tutor</p>
                  </div>
                  <div className="staff_member_socials">
                   <a href="https://www.whatapp.com"><AiOutlineWhatsApp/></a> 
                   <a href="https://www.facebook.com"><FiFacebook/></a> 
                   <a href="https://www.twitter.com"><FiTwitter/></a>
                  </div>
                </article>

                {/* Article */}
                <article className="staff_members fade-in">
                  <div className="staff_member_image">
                    <img src={Clement} alt="Mr. Clement" />
                  </div>
                  <div className="staff_member_info">
                    <h4>Clement</h4>
                    <p className='writtings'>Head of I.T Dept</p>
                  </div>
                  <div className="staff_member_socials">
                   <a href="https://www.whatapp.com"><AiOutlineWhatsApp/></a> 
                   <a href="https://www.facebook.com"><FiFacebook/></a> 
                   <a href="https://www.twitter.com"><FiTwitter/></a>
                  </div>
                </article>

                {/* Article */}
                <article className="staff_members fade-in">
                  <div className="staff_member_image">
                    <img src={Vida} alt="Mrs Vida" />
                  </div>
                  <div className="staff_member_info">
                    <h4>Vida</h4>
                    <p className='writtings'>Twi Tutor</p>
                  </div>
                  <div className="staff_member_socials">
                   <a href="https://www.whatapp.com"><AiOutlineWhatsApp/></a> 
                   <a href="https://www.facebook.com"><FiFacebook/></a> 
                   <a href="https://www.twitter.com"><FiTwitter/></a>
                  </div>
                </article>

                {/* Article */}
                <article className="staff_members fade-in">
                  <div className="staff_member_image">
                    <img src={Aquah} alt="Mr. Acquah" />
                  </div>
                  <div className="staff_member_info">
                    <h4>Acquah Akwesi</h4>
                    <p className='writtings'>HOD</p>
                  </div>
                  <div className="staff_member_socials">
                   <a href="https://www.whatapp.com"><AiOutlineWhatsApp/></a> 
                   <a href="https://www.facebook.com"><FiFacebook/></a> 
                   <a href="https://www.twitter.com"><FiTwitter/></a>
                  </div>
                </article>

                {/* Article */}
                <article className="staff_members fade-in">
                  <div className="staff_member_image">
                    <img src={Aquah} alt="Mr. Acquah" />
                  </div>
                  <div className="staff_member_info">
                    <h4>Acquah Akwesi</h4>
                    <p className='writtings'>HOD</p>
                  </div>
                  <div className="staff_member_socials">
                   <a href="https://www.whatapp.com"><AiOutlineWhatsApp/></a> 
                   <a href="https://www.facebook.com"><FiFacebook/></a> 
                   <a href="https://www.twitter.com"><FiTwitter/></a>
                  </div>
                </article>

                {/* Article */}
                <article className="staff_members fade-in">
                  <div className="staff_member_image">
                    <img src={Aquah} alt="Mr. Acquah" />
                  </div>
                  <div className="staff_member_info">
                    <h4>Acquah Akwesi</h4>
                    <p className='writtings'>HOD</p>
                  </div>
                  <div className="staff_member_socials">
                   <a href="https://www.whatapp.com"><AiOutlineWhatsApp/></a> 
                   <a href="https://www.facebook.com"><FiFacebook/></a> 
                   <a href="https://www.twitter.com"><FiTwitter/></a>
                  </div>
                </article>

                {/* Article */}
                <article className="staff_members fade-in">
                  <div className="staff_member_image">
                    <img src={Aquah} alt="Mr. Acquah" />
                  </div>
                  <div className="staff_member_info">
                    <h4>Acquah Akwesi</h4>
                    <p className='writtings'>HOD</p>
                  </div>
                  <div className="staff_member_socials">
                   <a href="https://www.whatapp.com"><AiOutlineWhatsApp/></a> 
                   <a href="https://www.facebook.com"><FiFacebook/></a> 
                   <a href="https://www.twitter.com"><FiTwitter/></a>
                  </div>
                </article>

                {/* Article */}
                <article className="staff_members fade-in">
                  <div className="staff_member_image">
                    <img src={Aquah} alt="Mr. Acquah" />
                  </div>
                  <div className="staff_member_info">
                    <h4>Acquah Akwesi</h4>
                    <p className='writtings'>HOD</p>
                  </div>
                  <div className="staff_member_socials">
                   <a href="https://www.whatapp.com"><AiOutlineWhatsApp/></a> 
                   <a href="https://www.facebook.com"><FiFacebook/></a> 
                   <a href="https://www.twitter.com"><FiTwitter/></a>
                  </div>
                </article>

                {/* Article */}
                <article className="staff_members fade-in">
                  <div className="staff_member_image">
                    <img src={Aquah} alt="Mr. Acquah" />
                  </div>
                  <div className="staff_member_info">
                    <h4>Acquah Akwesi</h4>
                    <p className='writtings'>HOD</p>
                  </div>
                  <div className="staff_member_socials">
                   <a href="https://www.whatapp.com"><AiOutlineWhatsApp/></a> 
                   <a href="https://www.facebook.com"><FiFacebook/></a> 
                   <a href="https://www.twitter.com"><FiTwitter/></a>
                  </div>
                </article>

                {/* Article */}
                <article className="staff_members fade-in">
                  <div className="staff_member_image">
                    <img src={Aquah} alt="Mr. Acquah" />
                  </div>
                  <div className="staff_member_info">
                    <h4>Acquah Akwesi</h4>
                    <p className='writtings'>HOD</p>
                  </div>
                  <div className="staff_member_socials">
                   <a href="https://www.whatapp.com"><AiOutlineWhatsApp/></a> 
                   <a href="https://www.facebook.com"><FiFacebook/></a> 
                   <a href="https://www.twitter.com"><FiTwitter/></a>
                  </div>
                </article>

              </div>
          </div>

        </div>
    </section>
  )
}

export default About