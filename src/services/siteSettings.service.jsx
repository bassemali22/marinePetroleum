import axios from "axios";

const API_URL = "http://localhost:5000/api/site-settings";

export const getSiteSettings = async () => {
  const res = await axios.get(API_URL);
  return res.data.data;
};

export const updateSiteSettings = async (data, token) => {
  const res = await axios.patch(API_URL, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data.data;
};
