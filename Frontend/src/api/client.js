import axios from 'axios'

const API_BASE = 'http://127.0.0.1:5000'

export const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' }
})

export const translate = (payload) => api.post('/translate', payload).then(r => r.data)
export const summarize = (payload) => api.post('/summarize', payload).then(r => r.data)


