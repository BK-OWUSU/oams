import React from 'react'
import './footer.css';
import BADGE from '../../assets/badge3-transparent.png';
//Social icons
import {AiOutlineWhatsApp} from 'react-icons/ai';
import {FiFacebook} from 'react-icons/fi';
import {FiTwitter} from 'react-icons/fi';


const Footer = () => {
  return (
    <section class="footer" id="footer">
    <div class="container footer_container">

    <article class="footer_1">
            <div class="footer_socials">
                <a href="https://www.whatapp.com"><AiOutlineWhatsApp/></a>
                <a href="https://www.facebook.com"><FiFacebook/></a> 
                <a href="https://www.twitter.com"><FiTwitter/></a>
                <a href="https://www.twitter.com"><FiTwitter/></a>
            </div>
            <div className="contact_info">
            <h4>Contact Us</h4>
            <p>+223 243 669 095</p>
            <p>+223 200 910 080</p>
            <p>ofoscomemorial@gmail.com</p>
            </div>
        </article>

        <article class="footer_2">
            <h4>Permalinks</h4>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </article>

        <article class="footer_3">
            <h4>Primacy</h4>
            <ul>
                <li><a href="https://google.com">Privacy Policy</a></li>
                <li><a href="https://google.com">Terms & conditions</a></li>
                <li><a href="https://google.com">Refund Policy</a></li>
            </ul>
        </article>

        <article class="footer_4">
            <a href="#home"><img src={BADGE} alt="Crest" /></a>
        </article> 
    </div>
    <div class="footer_copyright">
        <small>copyright &copy; Bi-Marks-K Designs</small>
    </div>
</section>
  )
}

export default Footer