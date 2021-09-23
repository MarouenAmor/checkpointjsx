import react from 'react';

import './App.css';
import  img  from './imageInSrc.jpg';
import v1 from './video1.mp4';
function App() {
  return (
    <div className="App">
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="red">Your name here</h1>
          <br />
          <img src={img} alt='imagesrc' />
          <br />
          <img src="/imageInPublic.jpg" alt='imagepublic' />
        </div>
        <video width={320} height={240} controls>
          <source src={v1} type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
