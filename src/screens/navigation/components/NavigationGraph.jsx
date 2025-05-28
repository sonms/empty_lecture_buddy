import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '/home/user/empty-lecture-buddy/src/screens/home/pages/HomePage.jsx';
import Profile from '/home/user/empty-lecture-buddy/src/screens/profile/pages/ProfilePage.jsx';
import List from '/home/user/empty-lecture-buddy/src/screens/list/pages/ListPage.jsx';
import MyPost from '/home/user/empty-lecture-buddy/src/screens/profile/pages/detail/MyPostPage.jsx';
import MyParticipating from '/home/user/empty-lecture-buddy/src/screens/profile/pages/detail/MyParticipatingPage.jsx';
import SignUpPage from '/home/user/empty-lecture-buddy/src/screens/signup/pages/SignUpForm.jsx';
import EditPage from '/home/user/empty-lecture-buddy/src/screens/edit/components/pages/EditPage.jsx';
import SearchPage from '/home/user/empty-lecture-buddy/src/screens/home/pages/SearchPage.jsx';
import LoginForm from '../../login/pages/LoginForm';

const NavigationGraph = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/myposts" element={<MyPost />} />
      <Route path="/profile/myparticipating" element={<MyParticipating />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/" element={<LoginForm />} />
    </Routes>
  );
};

export default NavigationGraph;
