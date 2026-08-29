const API_URL = import.meta.env.VITE_API_URL;

const getData = async () => {
  return await fetch(`${API_URL}v1/Dashboard/Summary`, {
    method: "GET",
  });
};

export default {
  getData,
};