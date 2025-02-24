import { Outlet, Link, useNavigate } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import { Button } from "../common";
import { COLORS } from "../../constants/styles";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Layout = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      logout();
      navigate("/");
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <nav
          className="px-4 py-3 flex justify-between"
          style={{ backgroundColor: COLORS.BLUE, color: COLORS.WHITE }}
        >
          <div className="flex space-x-4">
            <Link to={PATHS.HOME}>홈</Link>
          </div>
          {isAuthenticated ? (
            <>
              <div>
                <Link to={PATHS.MYPAGE}>마이페이지</Link>
                <Button onClick={onLogoutHandler}>로그아웃</Button>
              </div>
            </>
          ) : (
            <>
              <div>
                <Link to={PATHS.LOGIN}>로그인</Link>
                <Link to={PATHS.REGISTER} className="ml-2">
                  회원가입
                </Link>
              </div>
            </>
          )}
        </nav>

        <main className="flex-grow container mx-auto py-6">
          <Outlet />
        </main>

        <footer
          className="py-3 text-center text-sm"
          style={{ backgroundColor: COLORS.GRAY, color: COLORS.WHITE }}
        >
          리액트 9기 9조 강푸른 제출
        </footer>
      </div>
    </>
  );
};

export default Layout;
