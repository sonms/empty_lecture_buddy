import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BottomNavigation.css';

const BottomNavigation = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const navigate = useNavigate();

  const items = [
    { id: 'Home', icon: '🏠', text: 'Home', path : '/' },
    { id: 'List', icon: '✨', text: 'List', path : '/list' },
    { id: 'Profile', icon: '👤', text: 'Profile',path : '/profile' },
  ];

   const handleClick = (item) => {
    setActiveItem(item.id);
    navigate(item.path);
  };

  return (
    <nav className="bottom-nav">
      <ul className="bottom-nav-list">
        {items.map((item) => (
          <li
            key={item.id}
            className={`bottom-nav-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => handleClick(item)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.text}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavigation;
