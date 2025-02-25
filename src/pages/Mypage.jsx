import React, { useState, useContext, useEffect } from "react";
import { getUserProfile, updateProfile } from "../apis/api/user";
import { getTestResults, deleteTestResult } from "../apis/api/testResults";
import { AuthContext } from "../context/AuthContext";
import { Button } from "../components/common";
import { COLORS } from "../constants/styles";

const Mypage = () => {
  const { user, setUser } = useContext(AuthContext);
  const [nickname, setNickname] = useState(user?.nickname);
  const [feedback, setFeedback] = useState("");
  const [testResults, setTestResults] = useState([]);
  const [userData, setUserData] = useState(null);
  console.log("마이페이지", user);

  const localUserData = JSON.parse(localStorage.getItem("userData"));

  const fetchMyProfile = async () => {
    try {
      const userData = await getUserProfile(localUserData.accessToken);
      setUserData(userData);
      console.log("프로필 가져오기", userData);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserTestResults = async () => {
    try {
      const results = await getTestResults();
      // 현재 사용자가 작성한 결과만 필터링
      const userResults = results.filter(
        (result) => result.userId === localUserData.userId
      );
      setTestResults(userResults);
    } catch (error) {
      console.error("테스트 결과 조회 에러:", error);
    }
  };

  useEffect(() => {
    if (localUserData) {
      fetchUserTestResults();
      fetchMyProfile();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(user));
  }, [user]);

  console.log("유저정보", user);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nickname = formData.get("nickname");
    console.log("폼데이타전송", nickname);
    const data = new FormData();
    data.append("nickname", nickname);

    try {
      const response = await updateProfile(data);
      if (response.success) {
        setFeedback("프로필 업데이트 성공");
        setUser((prevUser) => ({ ...prevUser, nickname }));
      } else {
        setFeedback("프로필 업데이트 실패", response.message);
      }
    } catch (error) {
      console.error("프로필 업데이트 오류", error);
      setFeedback("프로필 업데이트 중 오류 발생");
    }
  };

  const handleDeleteTestResult = async (id) => {
    if (window.confirm("이 테스트 결과를 삭제하시겠습니까?")) {
      try {
        await deleteTestResult(id);
        fetchUserTestResults();
      } catch (error) {
        console.error("테스트 결과 삭제 오류", error);
      }
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">마이페이지</h1>
      {/* 프로필 수정 섹션 */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-2xl font-bold mb-4">프로필 수정</h2>
        <form onSubmit={(e) => handleProfileSubmit(e)}>
          <div className="mb-4">
            <label className="block mb-1">닉네임</label>
            <input
              type="text"
              value={nickname}
              name="nickname"
              onChange={(e) => handleNicknameChange(e)}
              className="w-full border rounded p-2"
            />
          </div>
          <Button
            type="submit"
            className="text-base transition-all duration-300 hover:brightness-90"
            style={{ backgroundColor: COLORS.BLUE, color: COLORS.WHITE }}
          >
            프로필 업데이트
          </Button>
        </form>
        {feedback && <p className="mt-2 text-green-600">{feedback}</p>}
      </div>

      {/* 내 테스트 결과 섹션 */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">내 테스트 결과</h2>
        {testResults.length === 0 ? (
          <p>테스트 결과가 없습니다.</p>
        ) : (
          <ul>
            {testResults.map((result) => (
              <li
                key={result.id}
                className="border-b py-2 flex justify-between items-center"
              >
                <div>
                  <p className="font-bold">MBTI: {result.mbti}</p>
                  <p className="text-sm text-gray-600">
                    작성일: {new Date(result.createdAt).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteTestResult(result.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Mypage;
