import './App.css';
import { AppContext } from './context/app_contexts';
import React, { useContext } from 'react';
import Message from './components/enterscreen/index.js'
import GetTiles from './components/tiles';
import GetSection from './components/section-stack';
import GetProject from './components/Projects';
import GetServices from './components/services';
import GetNav from './components/nav';
import GetContactForm from './components/form';
import GetPopUp from './components/popup';

function App() {
  let {popup, setPopup} = useContext(AppContext);
 
  return (
    <div className="App"> 
     <GetNav />
      <div className="compress">
        <GetTiles />
        <Message />
      </div>
      <div className="white_bg"> 
        <GetProject />
        <GetSection />
        <GetServices />
        {popup ? <GetPopUp /> : <GetContactForm />}
      </div>
    </div>
  );
}

export default App;