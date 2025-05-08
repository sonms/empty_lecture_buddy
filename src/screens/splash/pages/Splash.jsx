import React from 'react';
import '/home/user/empty-lecture-buddy/src/screens/splash/styles/Splash.css'; 
import image from '/home/user/empty-lecture-buddy/src/assets/image.png';

const Splash = () => {
  return (
    <div className="splash-container">
      {/* 상대 경로 또는 public 폴더 내 경로로 변경 */}
      <img src= {image} alt="Splash Image" className="splash-image" />
    </div>
  );
};

export default Splash;