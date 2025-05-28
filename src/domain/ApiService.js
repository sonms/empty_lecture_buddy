import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ApiService = {
  // 회원가입
  register: async (email, password, nickname) => {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, {
      email,
      password,
      nickname
    });
    return response.data;
  },

  // 로그인
  login: async (email, password) => {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      email,
      password
    });

    const { token, user } = response.data;

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    return { token, user };
  },

  //모집글 생성
  createActivity: async (data, token) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/activities`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getActivities: async (params = {}) => {
    try {
      const {
        category,
        maxDistance,
        lat,
        lng,
        startTime,
        endTime
      } = params;
  
      let query = `${API_BASE_URL}/activities?`;
  
      if (category) query += `category=${category}&`;
      if (maxDistance) query += `maxDistance=${maxDistance}&`;
      if (lat && lng) {
        query += `lat=${lat}&lng=${lng}&`;
      }
      if (startTime) query += `startTime=${startTime}&`;
      if (endTime) query += `endTime=${endTime}&`;
  
      query = query.endsWith('&') ? query.slice(0, -1) : query;
  
      const response = await axios.get(query, {
        headers: {
          'ngrok-skip-browser-warning': '69420'
        }
      });
  
      const results = response.data;
      if (!Array.isArray(results)) {
        console.error('API 응답이 배열이 아닙니다:', results);
        return [];
      }
  
      return results;
    } catch (error) {
      console.error('API 에러:', error.response || error);
      return [];
    }
  },


  joinActivity: async (activityId, token) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/activities/${activityId}/join`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // 내가 만든 모집글 조회
  getMyActivities: async () => {
    // GET /users/me/activities
    return await ApiService.getWithAuth('/users/me/activities');
  },

  // 내가 참여한 모집글 조회
  getMyParticipations: async () => {
    // GET /users/me/participations
    return await ApiService.getWithAuth('/users/me/participations');
  },

  // 공통 API
  getWithAuth: async (url) => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_BASE_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'ngrok-skip-browser-warning': '69420',
      }
    });
    return response.data;
  }
};

export default ApiService;
