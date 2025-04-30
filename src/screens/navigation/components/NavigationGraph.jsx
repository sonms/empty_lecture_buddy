import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '/home/user/empty-lecture-buddy/src/screens/home/pages/HomePage.jsx';
import Profile from '/home/user/empty-lecture-buddy/src/screens/profile/pages/ProfilePage.jsx';
import List from '/home/user/empty-lecture-buddy/src/screens/list/pages/ListPage.jsx';

const NavigationGraph = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default NavigationGraph;
