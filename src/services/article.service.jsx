import axios from "axios";

const API_URL = "http://localhost:5000/api/article";

export const getAllArticle = async () => {
  const res = await axios.get(API_URL);
  return res.data.data;
};

export const updateArticle = async (data, token, id) => {
  const res = await axios.patch(`${API_URL}/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data.data;
};

export const addArticle = async (data, token) => {
  const res = await axios.post(API_URL, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data.data;
};

export const deleteArticle = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.data;
};
