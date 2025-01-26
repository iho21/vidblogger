// _actions.js
import axios from 'axios';

export const completeOnboarding = async (formData) => {
  try {
    const response = await axios.post('/api/onboarding', formData);
    return response.data; 
  } catch (error) {
    return { error: error.message };
  }
};