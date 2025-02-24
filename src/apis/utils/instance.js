import axios from "axios";
import { API_BASE_URL } from "../../constants/api"; // 상대 경로 주의

const instance = axios.create({
  baseURL: API_BASE_URL,
});

export default instance;
