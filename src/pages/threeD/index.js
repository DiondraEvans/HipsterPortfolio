import './index.css';
import { InstagramEmbed } from 'react-social-media-embed';
import { Parallax} from 'react-scroll-parallax';
import GetNav from '../../components/nav';
import GetFooter from '../../components/footer/index';

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