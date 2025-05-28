import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react';
import ApiService from '/home/user/empty-lecture-buddy/src/domain/ApiService';
import '/home/user/empty-lecture-buddy/src/screens/home/styles/SearchPage.css';

const SearchPage = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const searchParams = location.state;
  console.log(searchParams);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
      
        /*const params = {
          category : '스터디'
        }*/
       
        
        const results = await ApiService.getActivities(searchParams);
        
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

  return (
    <div className="search-page">
      <h2>검색 결과</h2>
      {results.length === 0 ? (
        <p>검색 결과가 없습니다.</p>
      ) : (
        <ul className="results-list">
          {results.map((item) => (
            <li key={item.id} className="result-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><strong>카테고리:</strong> {item.categories?.join(', ')}</p>
              <p><strong>장소:</strong> {item.placeName}</p>
              <p><strong>시간:</strong> {item.startTime} ~ {item.endTime}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;
