import React, { useState } from 'react';
import '/home/user/empty-lecture-buddy/src/screens/login/styles/LoginForm.css';
import { Link } from 'react-router-dom';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직 실행
    onLogin(email, password);
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