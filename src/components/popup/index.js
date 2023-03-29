import './index.css';
import { AppContext } from '../../context/app_contexts';
import React, { useContext } from 'react';
function GetPopUp() {
    let {name} = useContext(AppContext);

 console.log({name: name})
  return (
    <div className="popup">
       <p>Thank you <span style={{color: "#C05858"}}>{name} </span>we will get back with you shortly on Instagram and email</p>
    </div>
  );
}

export default GetPopUp;