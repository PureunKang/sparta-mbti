// api 요청 및 응답 코드만 작성
import instance from "../utils/instance";
import { LOGIN_PATH } from "../../constants/auth";
import { REGISTER_PATH } from "../../constants/auth";

export const loginUser = async ({ id, password, expiresIn = "10m" }) => {
  try {
    const response = await instance.post(
      `${LOGIN_PATH}?expiresIn=${expiresIn}`,
      {
        id,
        password,
      }
    );
    return response.data;
  } catch (error) {
    console.error("로그인 에러: ", error);
    throw error;
  }
};

export const registerUser = async ({ id, password, nickname }) => {
  try {
    const response = await instance.post(REGISTER_PATH, {
      id,
      password,
      nickname,
    });
    return response.data;
  } catch (error) {
    console.error("회원가입 에러", error);
    throw error;
  }
};
