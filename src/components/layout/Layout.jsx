import { Outlet, Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import { Button } from "../common";
import { COLORS } from "../../constants/styles";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <nav
          className="px-4 py-3 flex justify-between"
          style={{ backgroundColor: COLORS.BLUE, color: COLORS.WHITE }}
        >
          <div className="flex space-x-4">
            <Link to={PATHS.HOME}>홈</Link>
            <Link to={PATHS.MYPAGE}>마이페이지</Link>
          </div>
          <Button>로그아웃</Button>
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
