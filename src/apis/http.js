import axios from 'axios';
const http = axios.create({
  baseURL: '/api/',
  timeout: 10000,
  headers:{'Content-Type':'application/json'}
});
 
http.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  response => {
    const { data } = response;
    if (data.code != 0) {
      if (data.code == 401) {
        // 如果需要登录
      }
      return Promise.reject(new Error(data.message || "Error"))
    } else {
      return data;
    }
  },
  error => {
    return Promise.reject(error)
  }
);
export const getAxios = (url, params) => {
  return http.get(url, { params });
};
export const postAxios = (url, data) => {
  return http.post(url, data);
};
export const deleteAxios = (url, data) => {
  return http.delete(url, data)
};
export const putAxios = (url, data) => {
  return http.put(url,data)
}
export default http;
// import { ref } from 'vue';
// export function useHttp() {
//   const responseData = ref({});
//   const error = ref({});
 
//   const fetchData = async (url, options) => {
//     console.log(url)
//     console.log(options)
//     console.log('233232')
//     responseData.value = {};
//     error.value = {};
//     try {
//       const res = await fetch(url, options);
//       if (!res.ok) {
//         throw new Error('Network response was not ok');
//       }
//       responseData.value = await res.json();
//     } catch (err) {
//       error.value = err.message || 'Failed to fetch data';
//     }
//   };
 
//   return { responseData, error, fetchData };
// }