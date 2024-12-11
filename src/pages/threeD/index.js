import './index.css';
import React, { useRef, useEffect } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import {Parallax} from 'react-scroll-parallax';
import GetNav from '../../components/nav';
import GetFooter from '../../components/footer/index';
// import Monkey from '../../MonkeyPlane'
// import Donut from '../../Donuts614'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float,  OrthographicCamera } from "@react-three/drei";
import Scene from '../../Character'

function Light({brightness, color}){
  return(
    <rectAreaLight
    width={5}
    height={5}
    color={color}
    intensity={brightness} 
    position={[-2,1,5]}
    lookAt={[0,0,0,]}
    castShadow
    />
  )
}

function GetThreeDPage() {

  return (  
  <div>
     <div className="firstSection">
        <GetNav />
        <div className="header-text">
            <h1>3D Art</h1>
            <a href="https://www.instagram.com/rosegoldrenders/"  target="_blank" rel="noopener noreferrer">@rosegoldrenders</a>
        </div>
     </div>
     <div className="donutSection">
    {/* I want to ideally put the donut here */}
    <Canvas shadows camera={{ position: [2, 3, 1], fov: 50}}>
      <Light brightness={20} color={"#da91b7"}/>
      {/* <Float speed={0.5} rotationIntensity={1.4} floatIntensity={1}> */}
        <Scene />
       {/* <Monkey />  */}
       {/* <Donut /> */}
      {/* </Float> */}
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