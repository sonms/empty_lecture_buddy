import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '/home/user/empty-lecture-buddy/src/screens/home/styles/HomePage.css'

const categories = [
    '스터디', '게임', '취미 생활', '점심', '보드게임', '기타'
  ];

const Home = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [formData, setFormData] = useState({ distance: '' });
  
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };  

    const handleChange = (key, value) => {
      setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
      const params = {
        title,
        description,
        category: selectedCategory,
        startTime,
        endTime,
        maxDistance: 500
      };
      console.log(params)
    

        navigate('/search', { state: params });
    };

    return (
        <div className="home-container">
          <h2>모임 검색하기</h2>
    
          <div className="input-group">
            <label>모임 이름</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="모임 이름을 입력하세요"
            />
          </div>
    

          <div className="input-group">
            <label>하고 싶은 활동을 작성해주세요</label>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="간단한 설명을 입력하세요"
            />
          </div>
    
          <div className="form-group">
              <label>카테고리</label>
              <div className="category-grid">
              {categories.map((cat) => (
                  <div
                  key={cat}
                  className={`category-option ${selectedCategory === cat ? 'selected' : ''}`}
                  onClick={() => handleCategoryClick(cat)}
                  >
                  <span className="round-indicator" />
                  <span>{cat}</span>
                  </div>
              ))}
              </div>
          </div>

          <div className="form-group">
          <label>시작 시간</label>
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>종료 시간</label>
          <input
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>거리</label>
          <div className="grid-box">
            {['500m', '1km', '5km', '10km', '캠퍼스 전체'].map((d) => (
              <label key={d}>
                <input
                  type="radio"
                  checked={formData.distance === d}
                  onChange={() => handleChange('distance', d)}
                />
                {d}
              </label>
            ))}
          </div>
        </div>

    
          <button className="submit-button" onClick={handleSubmit}>
            검색하기
          </button>

          <button className="fab-button" onClick={() => navigate('/edit')}>
            +
          </button>
        </div>
      );
};
  
  export default Home;
  