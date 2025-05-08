import React, { useState } from 'react';
import '/home/user/empty-lecture-buddy/src/screens/edit/components/styles/EditPage.css';

const EditPage = () => {
  const [step, setStep] = useState(1);

  // 전체 상태 저장
  const [formData, setFormData] = useState({
    title: '',
    description: '',
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

  const handleSubmit = () => {
    console.log('제출:', formData);
    alert('모집이 등록되었습니다!');
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
          <input
            type="text"
            placeholder="예: 12시부터 14시까지"
            value={formData.timeRange}
            onChange={(e) => handleChange('timeRange', e.target.value)}
          />
          <div className="grid-box">
            {[
              '공대 가동', '공대 나동', '공대 다동', '정보전산원', '인문학관',
              '도서관', '학생회관', '사회학관', '대학원관', '남직 CU',
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
