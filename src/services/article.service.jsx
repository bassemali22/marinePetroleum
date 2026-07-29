import api from "./Api";

const ENDPOINT = "/article";

export const getAllArticle = async () => {
  const { data } = await api.get(ENDPOINT);
  return data.data;
};

export const addArticle = async (article) => {
  const { data } = await api.post(ENDPOINT, article);
  return data.data;
};

export const updateArticle = async (id, article) => {
  const { data } = await api.patch(`${ENDPOINT}/${id}`, article);
  return data.data;
};

export const deleteArticle = async (id) => {
  const { data } = await api.delete(`${ENDPOINT}/${id}`);
  return data.data;
};
