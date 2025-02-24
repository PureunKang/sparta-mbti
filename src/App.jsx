import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* 헤더 영역 */}
      <header className="bg-blue-500 w-full py-4">
        <h1 className="text-center text-white text-3xl font-bold">
          Tailwind CSS 실험
        </h1>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="p-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                React & Tailwind
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                예제 제목
              </a>
              <p className="mt-2 text-gray-500">
                이 예제는 Tailwind CSS의 다양한 유틸리티 클래스를 실험하기 위한
                예제입니다.
              </p>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                버튼 클릭
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* 푸터 영역 */}
      <footer className="w-full py-4 bg-gray-800">
        <p className="text-center text-white">Tailwind CSS 실험 예제</p>
      </footer>
    </div>
  );
};

export default App;
