// api 요청 및 응답 코드만 작성
import instance from "../utils/instance";
import { LOGIN_PATH } from "../../constants/auth";
import { REGISTER_PATH } from "../../constants/auth";
import { GET_USER_PATH } from "../../constants/auth";
import { PROFILE_UPDATE_PATH } from "../../constants/auth";

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
    console.error("로그인 에러", error);
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

export const getUserProfile = async (token) => {
  try {
    const response = await instance.get(GET_USER_PATH, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("회원정보 확인 에러", error);
    throw error;
  }
};

export const updateProfile = async (formData) => {
  const token = localStorage.getItem("accessToken");

  try {
    const response = await instance.patch(PROFILE_UPDATE_PATH, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // 실제 요청 시 반드시 지정
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("프로필 업데이트 에러", error);
    throw error;
  }
};
