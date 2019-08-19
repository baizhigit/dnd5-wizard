import axios from 'axios';

export const getClasses = async () => {
  const { data } = await axios.get('/classes');
  return data.results;
};

export const getRaces = async () => {
  const { data } = await axios.get('/races');
  return data.results;
};

export const resultToDropdown = (results: { name: string; url: string }[]) =>
  results.map(result => ({
    label: result.name,
    value: result.name
  }));
