import '../enterscreen/index.css';
import React from 'react';
import Insta from '../enterscreen/images/InstagramSocial.png'
import TikTok from '../enterscreen/images/Tiktoksocial.png'
function Getmessage() {
 
  return (
    <div className="message">
        <h1 className="header-name">HipsterEditz</h1>

        <p className="header-bio">Designing engaging materials for content creators from all over the world. Thank you for taking the time to explore my work, and I look forward to collaborating with you on your next project!</p>
      <div className="socials">
        <a href="https://www.instagram.com/hipstereditz_/"><img src ={Insta} alt="instagram link"/></a>
        <a href="https://www.tiktok.com/@hipstereditz?_t=8aowMU4i1UQ&_r=1"><img src = {TikTok} alt="tiktok link"/></a>
      </div>
    </div>
  );
}

export default Getmessage;