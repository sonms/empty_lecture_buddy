import React from 'react';
import { useNavigate } from 'react-router-dom';
import '/home/user/empty-lecture-buddy/src/screens/profile/styles/ProfilePage.css';

const MyPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('로그아웃 되었습니다!');
    // 실제 로그아웃 로직 추가 필요
  };

  return (
    <div className="mypage-container">
      <div className="mypage-header">
        <h2>마이페이지</h2>
        <button className="logout-button" onClick={handleLogout}>로그아웃</button>
      </div>

      <div className="quick-access-buttons">
        <button className="round-button" onClick={() => navigate('/profile/myposts')}>
          <span className="icon">📌</span>
          <span className="button-text">내가 만든<br />모집글</span>
        </button>

        <button className="round-button" onClick={() => navigate('/profile/myparticipating')}>
          <span className="icon">👥</span>
          <span className="button-text">참여 중인<br />활동</span>
        </button>
      </div>

      <div className="settings-menu">
        <div className="menu-item">계정 수정</div>
        <div className="menu-item">즐겨찾기</div>
        <div className="menu-item">알림 설정</div>
      </div>
    </div>
  );
};

export default MyPage;