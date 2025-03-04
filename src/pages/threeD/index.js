import './index.css';
// eslint-disable-next-line
import React, { useRef, useEffect, Suspense } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import {Parallax} from 'react-scroll-parallax';
import GetNav from '../../components/nav';
import GetFooter from '../../components/footer/index';
// import Monkey from '../../MonkeyPlane'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Text } from "@react-three/drei";

import Candlewarmer from '../../Models/Candlewarmer'
import Matcha from '../../Models/Smallblendermatcha'

function GetThreeDPage() {

  return (  
  <div>
     <div className="firstSection">
        <GetNav />
        <div className="header-text">
            <h1>3D Art</h1>
            <a href="https://www.instagram.com/rosegoldrenders/" target="_blank" rel="noopener noreferrer">@rosegoldrenders</a>
        </div>
     </div>
     <div className="donutSection">    
    <Canvas shadows camera={{ position: [2, 1, 3], fov: 50 }}>
    <Environment preset="sunset" background={false} />
      {/* <Float speed={0.5} rotationIntensity={1.4} floatIntensity={1}> */}
        {/* <Character /> */}
        <Text
        fontSize={.4}
        color="black"
        position={[-7, 1.7, -2.3]}
        rotation={[0, 70, 0]}
        stroke="white"         // Outline color
        strokeWidth={0.01} 
      >
        Rest and Relaxation Corner
      </Text>
           <Suspense fallback={null}>
           <Candlewarmer />
            </Suspense>
        <Matcha />
      <OrbitControls enableZoom={true} />
    </Canvas>
     </div>
      <div className="art-section">   
        {/* <video src={video} autoPlay muted loop id="myVideo" type="video/mp4"/> */}
        <Parallax translateY={[-20, 20]}>
          <div className="dpicture-row">
            <div style={{ display: 'flex'}}>
              <InstagramEmbed url="https://www.instagram.com/p/CQi53eOgLVq/" width={"29rem"} height={580}/>
            </div>
            <div style={{ display: 'flex', alignSelf: "self-end"}}>
                <InstagramEmbed url="https://www.instagram.com/p/CQlrV1Kgpgk/" width={"29rem"} height={580}/>
            </div>
            <div style={{ display: 'flex'}}>
                <InstagramEmbed url="https://www.instagram.com/p/CQodnHOAUyp/" width={"29rem"} height={580}/>
            </div>
          </div>
        </Parallax>
      </div>
     
    <GetFooter />
  </div>
  );
}

export default GetThreeDPage;