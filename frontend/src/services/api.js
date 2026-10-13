import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  timeout: 20000,
});

export async function sendChatMessage(message) {
  const { data } = await api.post("/chat", { message });
  return data;
}

export default api;
