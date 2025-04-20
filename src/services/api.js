import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development' 
      ? 'http://localhost:9999/api'  // Direct connection in dev
      : '/api',                       // Proxy in production
    timeout: 15000, // Increase to 15 seconds
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache'
    }
  });

// Get Projects
export const getProjects = async () => {
  try {
    const response = await api.get('/projects');
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch projects. Check console for details.');
  }
};

// Get Blog Posts (Add this function)
export const getBlogPosts = async () => {
  try {
    const response = await api.get('/blogs');
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};