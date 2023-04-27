import axios from 'axios';

export const fetchUsers = async page => {
  const baseURL = 'https://6447b03b50c25337442bffce.mockapi.io';
  const resp = await axios.get(`${baseURL}/uc-maker?page=${page}&limit=4`);
  console.log(resp.data);
  return resp.data;
};
