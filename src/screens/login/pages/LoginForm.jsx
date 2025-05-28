import React, { useState } from 'react';
import '/home/user/empty-lecture-buddy/src/screens/login/styles/LoginForm.css';
import { Link } from 'react-router-dom';
import ApiService from '/home/user/empty-lecture-buddy/src/domain/ApiService.js';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 로그인 로직 실행
    try {
      const { token, user } = await ApiService.login(email, password);
      alert(`${user.nickname}님 환영합니다!`);
      console.log(token)
      onLogin(email, password);
    } catch (error) {
      alert('로그인 실패: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>로그인</h2>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">로그인</button>
      <p style={{ marginTop: '10px' }}>
        계정이 없으신가요?{' '}
        <Link to="/signup" style={{ color: '#007bff', textDecoration: 'underline' }}>
          회원가입
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;