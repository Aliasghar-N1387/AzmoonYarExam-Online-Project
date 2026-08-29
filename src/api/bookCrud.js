const API_URL = import.meta.env.VITE_API_URL;

const createTask = async (data, token) => {
  return await fetch(`${API_URL}/tasks/tasks/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const getBooks = async () => {
  return await fetch(`${API_URL}ادرس سواگر`, {
    method : 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  });
};
