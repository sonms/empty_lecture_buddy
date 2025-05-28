import sampleRecruitments from "/home/user/empty-lecture-buddy/src/entity/sample/SampleData.ts";
import ApiService from '/home/user/empty-lecture-buddy/src/domain/ApiService';
import '/home/user/empty-lecture-buddy/src/screens/profile/styles/ProfilePage.css';
import React, { useEffect, useState } from 'react';

const sampleData = sampleRecruitments

const MyPostPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const data = await ApiService.getMyActivities();
        console.log('getMyActivities 응답:', data);
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.warn('배열이 아닌 응답이 왔습니다:', data);
          setPosts([]);
        }
      } catch (err) {
        console.error('내가 만든 모집글 조회 중 오류:', err);
        setPosts([]);
      }
    };
    fetchMyPosts();
  }, []);

  if (posts.length === 0) return <p>작성한 모집글이 없습니다.</p>;

    return (
      <div className="list-container">
        <h2>내가 만든 모집글</h2>
        <div className="list-wrapper">
          {posts.map((item) => (
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
  
  export default MyPostPage;