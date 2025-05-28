import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/home/user/empty-lecture-buddy/src/screens/signup/styles/SignUpForm.css';
import ApiService from '/home/user/empty-lecture-buddy/src/domain/ApiService.js';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const result = await ApiService.register(email, password, nickname);
      alert(result.message);
    } catch (error) {
      alert(error.message || '회원가입 중 오류 발생');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const result = await ApiService.register(email, password, nickname);
      alert(result.message);
      navigate('/');
    } catch (error) {
      alert(error.response?.data?.message || '회원가입 중 오류 발생');
    }
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
      <input
        type="nickname"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        required
      />
      <button type="submit">가입하기</button>
    </form>
  );
}

export default SignupForm;
