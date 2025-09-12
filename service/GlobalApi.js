import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:1337";

const axiosClient = axios.create({
  baseURL: `${API_BASE_URL.replace(/\/$/, "")}/api/`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  timeout: 15000,
});

const CreateNewResume = (data) =>
  axiosClient.post("user-resumes", { data });

const GetUserResumes = (userEmail) =>
  axiosClient.get(
    `user-resumes?filters[userEmail][$eq]=${encodeURIComponent(userEmail)}`
  );

// Expect callers to pass the full payload shape (usually { data: { ...attributes } })
const UpdateResumeDetail = (id, payload) =>
  axiosClient.put(`user-resumes/${id}`, payload);

const GetResumeById = (id) =>
  axiosClient.get(`user-resumes/${id}?populate=*`);

const DeleteResumeById = (id) =>
  axiosClient.delete(`user-resumes/${id}`);

export default {
  CreateNewResume,
  GetUserResumes,
  UpdateResumeDetail,
  GetResumeById,
  DeleteResumeById,
};
