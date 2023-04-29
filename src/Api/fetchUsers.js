import axios from 'axios';
const baseURL = 'https://6447b03b50c25337442bffce.mockapi.io';

export const fetchUsers = async page => {
  const resp = await axios.get(`${baseURL}/uc-maker?page=${page}&limit=4`);
  return resp.data;
};
