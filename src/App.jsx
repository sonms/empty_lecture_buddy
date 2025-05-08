import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import NavigationGraph from '/home/user/empty-lecture-buddy/src/screens/navigation/components/NavigationGraph.jsx';
import BottomNavigation from '/home/user/empty-lecture-buddy/src/screens/navigation/components/BottomNavigation';
import LoginForm from '/home/user/empty-lecture-buddy/src/screens/login/pages/LoginForm.jsx';
import SignUpPage from '/home/user/empty-lecture-buddy/src/screens/signup/pages/SignUpForm.jsx';
import Splash from '/home/user/empty-lecture-buddy/src/screens/splash/pages/Splash.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  
  const handleLogin = (email, password) => {
    // TODO: 실제 로그인 인증 로직으로 대체
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const handleSignup = (email, password) => {
    // 회원가입 로직
    // TODO : 나중에 회원가입 로직으로
    console.log("회원가입 완료", email, password);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container" style={{ paddingBottom: '60px' }}>
      {showSplash ? (
        <Splash />
      ) : (
        <Routes>
          {/* 로그인 */}
          <Route
            path="/"
            element={
              isLoggedIn ? <Navigate to="/home" /> : <LoginForm onLogin={handleLogin} />
            }
          />
          
          {/* 회원가입 */}
          <Route
            path="/signup"
            element={<SignUpPage onSignup={handleSignup} />}
          />
          
          
          {/* 기타 모든 경로 */}
          <Route 
            path="/*" 
            element={
              isLoggedIn ? (
                <>
                  <NavigationGraph />
                  <BottomNavigation />
                </>
              ) : (
                <Navigate to="/" />
              )
            } 
          />
        </Routes>
      )}
      </div>
    </BrowserRouter>
  );
}

export default App;