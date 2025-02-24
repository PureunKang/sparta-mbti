import { useContext, useState } from "react";
import { validateLogin } from "../validators/authValidator";
import { Form, Input, Button } from "../components/common";
import { COLORS } from "../constants/styles";
import { PATHS } from "../constants/paths";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../apis/api/user";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const validationErrors = validateLogin(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await loginUser({
        id: formData.email,
        password: formData.password,
      });

      if (response.success) {
        localStorage.setItem("accessToken", response.accessToken);
        login(response);
        navigate(PATHS.HOME);
      } else {
        alert("로그인 실패", response.message);
      }
    } catch (error) {
      console.error("로그인 에러", error);
      alert("로그인 중 에러가 발생했습니다.");
    }
  };

  return (
    <>
      <Form onSubmit={onSubmitHandler}>
        <h1 className="text-center">로그인</h1>
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

        <Button
          style={{ backgroundColor: COLORS.BLUE, color: COLORS.WHITE }}
          type="submit"
        >
          로그인
        </Button>
        <div>
          <span>계정이 없으신가요?</span>
          <Link
            to={PATHS.REGISTER}
            style={{ color: COLORS.BLUE }}
            className="ml-1"
          >
            회원가입 하러가기
          </Link>
        </div>
      </Form>
    </>
  );
};

export default Login;
