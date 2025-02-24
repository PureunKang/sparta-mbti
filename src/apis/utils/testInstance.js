import axios from "axios";
import { TEST_API_URL } from "../../constants/api";

const instance = axios.create({
  baseURL: TEST_API_URL,
});

export default instance;
