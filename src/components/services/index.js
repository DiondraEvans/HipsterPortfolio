import './index.css';
import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import { InstagramEmbed } from 'react-social-media-embed';
import video from "./images/mostlyLuca.mp4"




function GetServices() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.services');
      const distance = element.getBoundingClientRect().top;

      if (distance < window.innerHeight * 0.7) {
        setIsActive(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
       <Element  name="services" className={`services ${isActive ? 'active' : ''}`}>
        
       <div className="intros-info"><p>Intros and outros are used by many content creators who have built or want to build a community who recognizes the creators' brand. Whether it is the entry point to your Youtube video or a sign off on your insta stories, this is the place that lets YOU 
        design your personal branding for your followers to visually admire.</p></div>
        <video src={video} autoPlay muted loop id="myVideo" type="video/mp4"/>
        <div className="offerings">
            <h1 className="off-header">Cartoon Services</h1>
            <div className='cartoon-row'>
                <div className="orange-sq-1">
                    <h2 className="off-text">Cartoon Intro <b>OR</b> Outro</h2>
                    <h3>(Product details) What’s included in this service:</h3>
                    <ul>
                        <li>Transition Screens</li>
                        <li>Music</li>
                        <li>Text</li>
                        <li>Color Palette (Up to 4 colors)</li>
                        <li>Liquid elements </li>
                        <li>An animated cartoon of yourself</li>
                            <ol style={{paddingLeft: "35px"}}>
                                <li>Head movement</li>
                                <li>Arm movement</li>
                                <li>Facial expressions</li>
                            </ol>
                        <li>Transition Screens</li>
                    </ul>
                </div>
                <div style={{ display: 'flex'}}>
                    <InstagramEmbed url="https://www.instagram.com/p/CQcIW_NnTg7/" width={"25rem"} height={880}/>
                </div>
                <div className="orange-sq-2">
                    <h2 className="off-text">Cartoon Bundle</h2>
                    <h3>(Product details) What’s included in this service:</h3>
                    <ul>
                        <li>Intro AND Outro</li>
                        <li>Music</li>
                        <li>Text</li>
                        <li>Transition Screens</li>
                        <li>Color Palette (Up to 4 colors)</li>
                        <li>Liquid elements </li>
                        <li>An animated cartoon of yourself</li>
                            <ol style={{paddingLeft: "35px"}}>
                                <li>Head movement</li>
                                <li>Arm movement</li>
                                <li>Facial expressions</li>
                            </ol>
                        <li>Transition Screens</li>
                    </ul>
                </div>
            </div>
            <div className="picture-row">
            <div style={{ display: 'flex'}}>
                    <InstagramEmbed url="https://www.instagram.com/p/CPs-i5BHv7B/" width={"29rem"} height={580}/>
            </div>
            
            <div className="orange-sq-3">
                <h2 className="off-text">Cartoon Drawing</h2>
                <h3>(Product details) What’s included in this service:</h3>
                <ul>
                    <li> One drawing based on a picture sent to me by the client</li>
                    <li>Three free revisions</li>
                </ul>
            </div>

            <div style={{ display: 'flex'}}>
                    <InstagramEmbed url="https://www.instagram.com/p/CNTzj57H5ZQ/?utm_source=ig_web_copy_link" width={"29rem"} height={580}/>
            </div>
        </div>
        </div>
        
        <div className="reg-services">
            <h1 className="off-header" style={{marginTop: "40px", marginBottom: "40px"}}>Regular Services</h1>
            <div className="reg-info">
            
                <div className="reg-orange-sq-1">
                    <h2 className="off-text">Intro <b>OR</b> Outro</h2>
                    <h3>(Product details) What’s included in this service:</h3>
                        <ul>
                            <li>Transition Screens</li>
                            <li>Color Palette (Up to 4 colors)</li>
                            <li>Liquid elements </li>
                            <li>Music</li>
                            <li>Text</li>
                            <li>(For outros only) Previous video squares</li>
                        </ul>
                </div> 
                <div class="reg-intro-outro">
                    <div style={{ display: 'flex'}}>
                        <InstagramEmbed url="https://www.instagram.com/p/CCCreu6HFsU/" width={428} height={293}/>
                    </div>
                    <div style={{ display: 'flex'}}>
                        <InstagramEmbed url="https://www.instagram.com/p/CZE3FD6lh0b/" width={428} height={293}/>
                    </div>
                </div>
                <div className="reg-orange-sq-2">
                    <h2 className="off-text">Regular Bundle</h2>
                    <h3>(Product details) What’s included in this service:</h3>
                        <ul>
                            <li>Transition Screens</li>
                            <li>Color Palette (Up to 4 colors)</li>
                            <li>Liquid elements </li>
                            <li>Music</li>
                            <li>Text</li>
                            <li>(For outros only) Previous video squares</li>
                        </ul>
                </div>
            </div>
            
        </div>
    </Element>
  );
  }

export default GetServices;