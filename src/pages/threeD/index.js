import './index.css';
import React, { useRef, useEffect } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import {Parallax} from 'react-scroll-parallax';
import GetNav from '../../components/nav';
import GetFooter from '../../components/footer/index';
import * as THREE from 'three';

function GetThreeDPage() {
  
  const containerRef = useRef(null);
 

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: "pink" });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
    console.log("mounted")
  }, []);
  return (  
  <div>
     <div className="firstSection">
        <GetNav />
        <div className="header-text">
            <h1>3D Art</h1>
            <a href="https://www.instagram.com/rosegoldrenders/"  target="_blank" rel="noopener noreferrer">@rosegoldrenders</a>
        </div>
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
    <div ref={containerRef}></div>;    
    <GetFooter />
  </div>
  );
}

export default GetThreeDPage;