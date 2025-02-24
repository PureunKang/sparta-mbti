import instance from "../utils/testInstance";

export const getTestResults = async () => {
  const response = await instance.get("/");
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await instance.post("/", resultData);
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await instance.delete(`/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  const response = await instance.patch(`/${id}`, { visibility });
  return response.data;
};
