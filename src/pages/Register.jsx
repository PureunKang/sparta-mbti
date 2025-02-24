import { useState } from "react";
import { Form, Input, Button } from "../components/common";
import { COLORS } from "../constants/styles";
import { PATHS } from "../constants/paths";
import { Link, useNavigate } from "react-router-dom";
import { validateRegister } from "../validators/authValidator";
import { registerUser } from "../apis/api/user";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const validationErrors = validateRegister(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await registerUser({
        id: formData.email,
        password: formData.password,
        nickname: formData.nickname,
      });

      if (response.success) {
        alert(response.message);
        navigate(PATHS.LOGIN);
      } else {
        alert("회원가입 실패", response.message);
      }
    } catch (error) {
      console.error("회원가입 에러: ", error);
      alert("회원가입 중 에러가 발생했습니다.");
    }
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <h1 className="text-center">회원가입</h1>

      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={onChangeHandler}
        placeholder="이메일"
      />
      {errors.email && <p style={{ color: COLORS.RED }}>{errors.email}</p>}

      <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={onChangeHandler}
        placeholder="비밀번호"
      />
      {errors.password && (
        <p style={{ color: COLORS.RED }}>{errors.password}</p>
      )}

      <Input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={onChangeHandler}
        placeholder="비밀번호 확인"
      />
      {errors.confirmPassword && (
        <p style={{ color: COLORS.RED }}>{errors.confirmPassword}</p>
      )}

      <Input
        type="text"
        name="nickname"
        value={formData.nickname}
        onChange={onChangeHandler}
        placeholder="닉네임"
      />
      {errors.nickname && (
        <p style={{ color: COLORS.RED }}>{errors.nickname}</p>
      )}

      <Button
        style={{ backgroundColor: COLORS.BLUE, color: COLORS.WHITE }}
        type="submit"
      >
        회원가입
      </Button>

      <div>
        <span>이미 계정이 있으신가요?</span>
        <Link to={PATHS.LOGIN} style={{ color: COLORS.BLUE }} className="ml-1">
          로그인 하러가기
        </Link>
      </div>
    </Form>
  );
};

export default Register;
