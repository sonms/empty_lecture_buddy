import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/home/user/empty-lecture-buddy/src/screens/home/styles/HomePage.css'

const categories = [
    '스터디', '게임', '취미 생활', '점심', '보드게임', '기타'
  ];

const Home = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };  

    const handleSubmit = () => {
        if (!title || !description || !selectedCategory) {
          alert('모든 항목을 입력해주세요.');
          return;
        }
        console.log({ title, description, selectedCategory });
        alert('검색되었습니다!');
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
  