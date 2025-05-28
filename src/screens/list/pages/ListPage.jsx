import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ApiService from '/home/user/empty-lecture-buddy/src/domain/ApiService';
import "/home/user/empty-lecture-buddy/src/screens/list/styles/ListPage.css";
import "/home/user/empty-lecture-buddy/src/entity/sample/SampleData.ts"
import sampleRecruitments from "/home/user/empty-lecture-buddy/src/entity/sample/SampleData.ts";

const List = () => {
  const [results, setResults] = useState([]);

  
  useEffect(() => {
    const fetchActivities = async () => {
      try {
      
        const params = {
          category : '스터디'
          //startTime: "2025-05-08T13:35:00.000Z",
          //endTime: "2025-05-08T14:38:00.000Z"
        }
        
        const results = await ApiService.getActivities(params);
        console.log(results)
        if (Array.isArray(results)) {
          setResults(results);
        } else {
          console.error('Expected array but got:', results);
          setResults([]);
        
        }
      } catch (err) {
        console.error('활동 데이터를 가져오는 중 오류 발생:', err);
      
        setResults([]);
      } finally {
        //setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  const handleJoin = async (activityId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('로그인이 필요합니다.');
        return;
      }

      const response = await ApiService.joinActivity(activityId, token);
      alert(response.message || '참여 완료!');
      console.log(response.message)
    } catch (error) {
      console.error('참여 중 오류 발생:', error);
      alert('참여에 실패했습니다.');
    }
  };

  return (
    <div className="list-container">
    <h2>모집 중인 활동</h2>
    <div className="list-wrapper">
      {results.map((item) => (
        <div key={item._id} className="list-card">
          <h3 className="list-title">{item.title}</h3>
          <p>
            🕒 {new Date(item.startTime).toLocaleString()} ~ {new Date(item.endTime).toLocaleString()}
          </p>
          <p>
            👥 {item.participants.length}/{item.maxParticipants}
          </p>
          <p>
            📍 {item.placeName} {item.detailPlace}
          </p>
          <button className="join-button" onClick={() => handleJoin(item._id)}>참여하기</button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default List;
