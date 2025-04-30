import { useState } from "react";
import "/home/user/empty-lecture-buddy/src/screens/list/styles/ListPage.css";
import "/home/user/empty-lecture-buddy/src/entity/sample/SampleData.ts"
import sampleRecruitments from "/home/user/empty-lecture-buddy/src/entity/sample/SampleData.ts";

const sampleData = sampleRecruitments

const List = () => {
  return (
    <div className="list-container">
      <h2>모임 목록</h2>
      <div className="list-wrapper">
        {sampleData.map((item) => (
          <div key={item.id} className="list-card">
            <h3 className="list-title">{item.title}</h3>
            <p>🕒 {item.time}</p>
            <p>👥 {item.personnelCount}/{item.personnelTotalCount}</p>
            <p>📍 {item.location}</p>
            <button className="join-button">참여하기</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
