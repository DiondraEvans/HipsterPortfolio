import './index.css';
import image1 from "./images/html_logo.png"
import image2 from "./images/css.png"
import image3 from "./images/javascript.png"
import image4 from "./images/mongoDB.png"
import image5 from "./images/React.png"
import image6 from "./images/bootstrap.png"
import image7 from "./images/figma.png"
import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';


function GetSection() {
 const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.animated-element');
      const distance = element.getBoundingClientRect().top;

      if (distance < window.innerHeight * 0.8) {
        setIsActive(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  return (
   <Element name="animatedElement" className={`animated-element ${isActive ? 'active' : ''}`}>
      <h1>My Services</h1>
         {/* <div className="tech-stack">
          <img src={image1}></img>
          <img src={image2}></img>
          <img src={image3}></img>
          <img style={{width: "10%"}} src={image4}></img>
          <img style={{width: "10%"}} src={image5}></img>
          <img style={{width: "8%"}} src={image6}></img>
          <img style={{width: "5%"}} src={image7}></img>
         </div> */}
       </Element>
  );
}

export default GetSection;