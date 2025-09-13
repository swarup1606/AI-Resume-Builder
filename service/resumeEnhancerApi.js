// src/service/resumeEnhancerApi.js
import axios from 'axios';

const BASE = import.meta.env.VITE_RESUME_ENHANCER_API || 'http://localhost:5001';

export async function enhanceResume(payload) {
  // payload: FormData or {text, jobDescription}
  const url = `${BASE}/tool`;
  const res = await axios.post(url, payload, {
    headers: payload instanceof FormData ? {'Content-Type': 'multipart/form-data'} : {'Content-Type':'application/json'},
  });
  return res.data;
}

export async function downloadPdf(formData) {
  const res = await axios.post(`${BASE}/download_pdf`, formData, { responseType: 'blob' });
  return res.data;
}

// add other helpers: download_docx, download_jpg
export async function downloadDocx(formData) {
  const res = await axios.post(`${BASE}/download_docx`, formData, { responseType: 'blob' });
  return res.data;
}
