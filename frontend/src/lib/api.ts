import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:5192/api/v1",
  withCredentials: true,
  headers: { "Content-Type": "application/json" }
})