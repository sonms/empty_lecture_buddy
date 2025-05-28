import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/home/user/empty-lecture-buddy/src/screens/edit/components/styles/EditPage.css';
import ApiService from '/home/user/empty-lecture-buddy/src/domain/ApiService.js';

const EditPage = () => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const categories = [
    '스터디', '게임', '취미 생활', '점심', '보드게임', '기타'
  ];

  const handleCategoryClick = (category) => {
      setSelectedCategory(category);
  }; 
  // 전체 상태 저장
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    categories : '',
    members: '',
    timeRange: '',
    location: '',
    detailedLocation: '',
    availableTime: '지금 가능한 사람',
    customTime: '',
    distance: '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    const coordinates = [127.12345, 37.54321];
    const { date, start, end } = formData;
    const startTime = new Date(`${date}T${start}:00Z`).toISOString();
    const endTime = new Date(`${date}T${end}:00Z`).toISOString();
  
    const activityData = {
      title: formData.title,
      description: formData.description,
      categories : selectedCategory,
      members: formData.members,
      coordinates: coordinates,
      placeName: formData.location,
      detailPlace: formData.detailedLocation,
      startTime: startTime,
      endTime: endTime,
      maxParticipants: formData.members === '기타' ? 0 : parseInt(formData.members),
      image: '',//선택사항
    };

    try {
      const result = await ApiService.createActivity(activityData, token);
      alert('모집글이 등록되었습니다!');
      console.log('등록된 모집글:', result);
      navigate('/home');
    } catch (error) {
      alert('모집글 등록에 실패했습니다.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="edit-container">
      <h2>모집 등록</h2>

      {step === 1 && (
        <>
          <input
            type="text"
            placeholder="모임 제목 입력"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
          />
          <input
            type="text"
            placeholder="설명 입력"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
          />
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
          <div className="grid-box">
            {['2명', '3명', '4명', '5명', '6명', '기타'].map((count) => (
              <label key={count}>
                <input
                  type="radio"
                  checked={formData.members === count}
                  onChange={() => handleChange('members', count)}
                />
                {count}
              </label>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="form-group">
            <label>모임 날짜</label>
            <input
              type="date"
              value={formData.date || ''}
              onChange={(e) => handleChange('date', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>시작 시간</label>
            <input
              type="time"
              value={formData.start || ''}
              onChange={(e) => handleChange('start', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>종료 시간</label>
            <input
              type="time"
              value={formData.end || ''}
              onChange={(e) => handleChange('end', e.target.value)}
            />
          </div>

          <div className="grid-box">
            {[
              '공대 가동', '공대 나동', '공대 다동', '정보전산원', '인문학관',
              '도서관', '학생회관', '사회학관', '대학원관', '남긱 CU',
              '체육관', '운동장', '중도 CU', '여자기숙사',
            ].map((place) => (
              <label key={place}>
                <input
                  type="radio"
                  checked={formData.location === place}
                  onChange={() => handleChange('location', place)}
                />
                {place}
              </label>
            ))}
          </div>
          <input
            type="text"
            placeholder="상세 위치 입력"
            value={formData.detailedLocation}
            onChange={(e) => handleChange('detailedLocation', e.target.value)}
          />
        </>
      )}

      {step === 3 && (
        <>
          <div>
            <label>
              <input
                type="radio"
                checked={formData.availableTime === '지금 가능한 사람'}
                onChange={() => handleChange('availableTime', '지금 가능한 사람')}
              />
              지금 가능한 사람
            </label>
            <label>
              <input
                type="radio"
                checked={formData.availableTime === '특정 시간 설정'}
                onChange={() => handleChange('availableTime', '특정 시간 설정')}
              />
              특정 시간 설정
            </label>
            {formData.availableTime === '특정 시간 설정' && (
              <input
                type="text"
                placeholder="예: 12:00 ~ 14:00"
                value={formData.customTime}
                onChange={(e) => handleChange('customTime', e.target.value)}
              />
            )}
          </div>

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
        </>
      )}

      <div className="button-group">
        {step > 1 && <button onClick={handlePrev}>이전</button>}
        {step < 3 ? (
          <button onClick={handleNext}>계속</button>
        ) : (
          <button onClick={handleSubmit}>등록</button>
        )}
      </div>
    </div>
  );
};

export default EditPage;
