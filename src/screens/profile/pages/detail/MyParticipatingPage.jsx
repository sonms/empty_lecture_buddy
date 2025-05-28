import sampleRecruitments from "/home/user/empty-lecture-buddy/src/entity/sample/SampleData.ts";
import ApiService from '/home/user/empty-lecture-buddy/src/domain/ApiService';
import '/home/user/empty-lecture-buddy/src/screens/profile/styles/ProfilePage.css';
import React, { useEffect, useState } from 'react';

const sampleData = sampleRecruitments

const MyParticipatingPage = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParticipations = async () => {
      try {
        const data = await ApiService.getMyParticipations();
        setActivities(data);
      } catch (err) {
        console.error('참여 중인 활동 조회 중 오류:', err);
        setActivities([]);
      } finally {
        setLoading(false);
      }
    };
    fetchParticipations();
  }, []);

  if (activities.length === 0) return <p>참여 중인 활동이 없습니다.</p>;


    return (
      <div className="list-container">
        <h2>참여 중인 활동</h2>
        <div className="list-wrapper">
          {activities.map((item) => (
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
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MyParticipatingPage;