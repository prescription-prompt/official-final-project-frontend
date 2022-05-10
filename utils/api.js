import axios from 'axios';

const ppApi = axios.create({
  baseURL: 'http://192.168.10.185:9090/api/',
});

export const postPrescription = async (newPrescription) => {
  const { data } = await ppApi.post(`/prescriptions`, newPrescription);
  return data.prescription;
};
