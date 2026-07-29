import api from "./Api"

export const getSiteSettings = async () => {
  const res = await api.get("/site-settings");
  return res.data.data;
};

export const updateSiteSettings = async (data, token) => {
  const res = await api.patch("/site-setting", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data.data;
};
