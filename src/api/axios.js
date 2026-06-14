// import axios from "axios";

// export default axios.create({
//     baseURL: "http://127.0.0.1:8000/api/",
// });



import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/",
});

export default api;