import { useState } from "react";
import { validateLogin } from "../validators/authValidator";
import { Form, Input, Button } from "../components/common";
import { COLORS } from "../constants/styles";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const validationErrors = validateLogin(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("로그인 요청", formData);
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
      </Form>
    </>
  );
};

export default Login;
