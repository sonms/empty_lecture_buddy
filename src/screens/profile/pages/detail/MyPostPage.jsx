import sampleRecruitments from "/home/user/empty-lecture-buddy/src/entity/sample/SampleData.ts";

const sampleData = sampleRecruitments

const MyPostPage = () => {
    return (
      <div className="list-container">
        <h2>내가 만든 모집글</h2>
        <div className="list-wrapper">
          {sampleData.map((item) => (
            <div key={item.id} className="list-card">
              <h3 className="list-title">{item.title}</h3>
              <p>🕒 {item.time}</p>
              <p>👥 {item.personnelCount}/{item.personnelTotalCount}</p>
              <p>📍 {item.location}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MyPostPage;