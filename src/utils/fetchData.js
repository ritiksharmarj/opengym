import { TIMEOUT_SEC } from './config';

export const workoutOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

const timeout = (sec) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${sec} second.`));
    }, sec * 1000);
  });
};

export const fetchData = async (url, options) => {
  try {
    // const response = await fetch(url, options);
    const response = await Promise.race([
      fetch(url, options),
      timeout(TIMEOUT_SEC),
    ]);
    const data = await response.json();

    if (!response.ok) throw new Error(`${data.message} (${response.status})`);

    return data;
  } catch (error) {
    throw error;
  }
};
