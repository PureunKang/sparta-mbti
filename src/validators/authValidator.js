export const validateLogin = ({ email, password }) => {
  const errors = {};

  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();

  if (!trimmedEmail) {
    errors.email = "이메일을 입력해 주세요.";
  } else if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
    errors.email = "유효한 이메일 형식을 입력해 주세요.";
  }

  if (!trimmedPassword) {
    errors.password = "비밀번호를 입력해 주세요.";
  } else if (trimmedPassword.length < 8) {
    errors.password = "비밀번호는 최소 8자 이상 입력 해야 합니다.";
  }

  return errors;
};
