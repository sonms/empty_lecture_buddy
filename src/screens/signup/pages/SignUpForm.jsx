import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/home/user/empty-lecture-buddy/src/screens/signup/styles/SignUpForm.css';

function SignupForm({ onSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    // 회원가입 로직 실행 후 로그인 페이지로 리다이렉션
    onSignup(email, password);

    // 회원가입 완료 후 로그인 페이지로 리다이렉트
    navigate('/');
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>회원가입</h2>
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
      <input
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button type="submit" handleSubmit={handleSubmit}>가입하기</button>
    </form>
  );
}

export default SignupForm;
