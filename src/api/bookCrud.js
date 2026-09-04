const API_URL = import.meta.env.VITE_API_URL;

const getBooks = async () => {
  return await fetch(`${API_URL}v1/book`, {
    method: "GET",
  });
};

const createBook = async (data) => {
  return await fetch(`${API_URL}v1/book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export default {
  getBooks,
  createBook,
};
