import { useState } from "react";
import { questions } from "../data/questions";
import { Button } from "./common";
import { COLORS } from "../constants/styles";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" })
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleOptionSelect = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = {
      type: questions[currentIndex].type,
      answer,
    };
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleShowResult = () => {
    if (onSubmit) {
      onSubmit(answers);
    }
    setShowModal(true);
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-600">
          총 {questions.length}문항
        </h2>
        <p className="text-gray-600">이 테스트는 약 3분 정도 소요됩니다.</p>
      </div>

      <div key={currentQuestion.id} className="mb-6">
        <p className="font-semibold text-lg mb-3">{currentQuestion.question}</p>
        <div className="space-y-2">
          {currentQuestion.options.map((option, i) => (
            <label
              key={i}
              className={`block p-3 border rounded-lg cursor-pointer transition-colors duration-300 ${
                answers[currentIndex]?.answer === option ? "bg-gray-100" : ""
              } hover:bg-gray-100`}
            >
              <input
                type="radio"
                name={`question-${currentIndex}`}
                value={option}
                checked={answers[currentIndex]?.answer === option}
                onChange={() => handleOptionSelect(option)}
                className="mr-2 text-primary-color"
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        {currentIndex > 0 && (
          <Button
            type="button"
            onClick={handlePrev}
            className="text-base transition-all duration-300 hover:brightness-90"
            style={{ backgroundColor: COLORS.BLUE, color: COLORS.WHITE }}
          >
            이전
          </Button>
        )}
        {currentIndex < questions.length - 1 ? (
          <Button
            type="button"
            onClick={handleNext}
            className="text-base transition-all duration-300 hover:brightness-90"
            style={{ backgroundColor: COLORS.BLUE, color: COLORS.WHITE }}
          >
            다음
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleShowResult}
            className="text-base transition-all duration-300 hover:brightness-90"
            style={{ backgroundColor: COLORS.BLUE, color: COLORS.WHITE }}
          >
            결과보기
          </Button>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">테스트 결과</h2>
            <pre className="text-sm text-gray-700 max-h-60 overflow-y-auto">
              {""}
            </pre>
            <Button
              type="button"
              onClick={() => setShowModal(false)}
              className="text-base transition-all duration-300 hover:brightness-90"
              style={{ backgroundColor: COLORS.BLUE, color: COLORS.WHITE }}
            >
              닫기
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestForm;
