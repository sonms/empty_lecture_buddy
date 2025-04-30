class Recruitment {
    id: number;
    title: string;
    personnelCount: number;
    personnelTotalCount : number;
    time: string;
    location: string;
    constructor(id, title, personnelCount, personnelTotalCount, time, location) {
      this.id = id;
      this.title = title;
      this.personnelCount = personnelCount;
      this.personnelTotalCount = personnelTotalCount;
      this.time = time;
      this.location = location;
    }
  }
  
  export default Recruitment;
  