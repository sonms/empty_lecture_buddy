import sampleRecruitments from "/home/user/empty-lecture-buddy/src/entity/sample/SampleData.ts";

const sampleData = sampleRecruitments

const MyParticipatingPage = () => {
    return (
      <div className="list-container">
        <h2>참여 중인 활동</h2>
        <div className="list-wrapper">
          {sampleData.map((item) => (
            <div key={item.id} className="list-card">
              <h3 className="list-title">{item.title}</h3>
              <p>🕒 {item.time}</p>
              <p>👥 {item.personnelCount}/{item.personnelTotalCount}</p>
              <p>📍 {item.location}</p>
              <button className="join-button">참여중</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MyParticipatingPage;