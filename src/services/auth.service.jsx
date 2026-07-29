import api from "./Api";

export const login = async (payload) => {
  try {
    console.log("Before Request");

    const { data } = await api.post("/auth/login", payload);

    console.log("After Request", data);

    localStorage.setItem("token", data.token);

    return data.data;
  } catch (err) {
    console.log("Error:", err);
    console.log("Status:", err.response?.status);
    console.log("Data:", err.response?.data);

    throw err;
  }
};
