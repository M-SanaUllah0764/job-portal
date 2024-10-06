import axios from 'axios';

// Set the base URL of your API
const API_URL = 'http://localhost:5000/api';

// API functions

export const registerUser = async (username, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/signup`, { username, email, password });
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export const signIn = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/signin`, { email, password });
        return response.data;
    } catch (error) {
        console.error('Error signing in:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export const createJob = async (token, jobData) => {
    try {
        const response = await axios.post(`${API_URL}/jobs`, jobData, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating job:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export const getJobs = async () => {
    try {
        const response = await axios.get(`${API_URL}/jobs`);
        return response.data;
    } catch (error) {
        console.error('Error fetching jobs:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export const deleteJob = async (token, jobId) => {
    try {
        const response = await axios.delete(`${API_URL}/jobs/${jobId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting job:', error.response ? error.response.data : error.message);
        throw error;
    }
};


export const updateJob = async (token, jobId, jobData) => {
    try {
        const response = await axios.put(`${API_URL}/jobs/${jobId}`, jobData, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating job:', error.response ? error.response.data : error.message);
        throw error;
    }
};