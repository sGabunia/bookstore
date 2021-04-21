import axios from "axios";
const apiKey = "AIzaSyCYWdtLmRzmj3yPgrY8S_oMBdCwLqwHpJs";
const base_url = `https://www.googleapis.com/books/v1/volumes?q=web&maxResults=12&key=${apiKey}`;

const getAll = async () => {
  const response = await axios.get(base_url);
  return response.data.items;
};

export default { getAll };
