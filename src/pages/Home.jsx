import { Card, Button } from "../components/common";
import { COLORS } from "../constants/styles";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../constants/paths";

const Home = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    const data = JSON.parse(localStorage.getItem("userData"));
    const token = data.accessToken;

    if (!token) {
      alert("로그인이 필요합니다.");
      navigate(PATHS.LOGIN);
    } else {
      navigate(PATHS.TEST);
    }
  };
  return (
    <>
      <div className="w-full min-h-screen py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-2xl font-bold text-gray-900">
              무료 성격 테스트
            </h1>
            <h2 className="text-lg text-gray-700 mt-2">
              자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            <Card title="성격 유형 검사">
              자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을
              미치는지 알아보세요.
            </Card>
            <Card title="성격 유형 이해">
              다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
            </Card>
            <Card title="팀 평가">
              팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
              배워보세요.
            </Card>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Button
            className="text-base transition-all duration-300 hover:brightness-90"
            style={{ backgroundColor: COLORS.BLUE, color: COLORS.WHITE }}
            onClick={onClickHandler}
          >
            내 성격 알아보러 가기
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
