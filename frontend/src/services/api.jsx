import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/products";

export const api = axios.create({ baseURL: BACKEND_URL, headers: { "Content-Type": "application/json" } });
export const apiForSpecific = axios.create({ baseURL: BACKEND_URL, headers: { "Content-Type": "application/json" } });
export const apiCategory = axios.create({ baseURL: BACKEND_URL, headers: { "Content-Type": "application/json" } });
