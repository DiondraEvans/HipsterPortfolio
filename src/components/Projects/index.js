import './index.css';
import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';




function GetProject() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.purple');
      const distance = element.getBoundingClientRect().top;

      if (distance < window.innerHeight * 0.7) {
        setIsActive(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
       <Element  name="purple" className={`purple ${isActive ? 'active' : ''}`}>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RinvNiw1Cd8?autoplay=1&mute=1&loop=1&controls=0&playlist=RinvNiw1Cd8" title="Reel with music 2"  allow="accelerometer; " allowFullScreen></iframe>
        {/* <h1 style={{margin: 0}}>My Projects</h1>
          <div className='projects'>
            <div className="sneakers">
            <h1>Sneakers
              E-Commerce
            </h1>
             <div className="sneakersbtn">See Project</div>
            </div>

            <div className="bookclub">
              <div class="bcnav">
                <ul>
                  <li>Home</li>
                  <li>Genre</li>
                  <li>Login</li>
                </ul>
              </div>
              <h1>BookClub</h1>
              <div className="bcbtn">See Project</div>
            </div>
            
          </div> */}
       </Element>
  );
  }

export default GetProject;