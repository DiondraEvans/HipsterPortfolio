import './index.css';
import leftimage from '../../images/left-icon.png'
import midimage from '../../images/mid-icon.png'
import rightimage from '../../images/right-icon.png'

function GetTiles() {

 
  return (
    <div className="get_tiles">
         <img src={leftimage} alt="megtheestallion" className="leftimage" id="images"/>
        <img src={midimage} alt="Hiyeonni" className="midimage" id="images"/>
        <img src={rightimage} alt="influencer" className="rightimage" id="images"/>
    </div>
  );
}

export default GetTiles;