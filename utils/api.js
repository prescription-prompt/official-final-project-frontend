import axios from 'axios';

const ppApi = axios.create({
  baseURL: 'http://192.168.10.185:9090/api/',
});

export const postPrescription = async (newPrescription) => {
  const { data } = await ppApi.post(`/prescriptions`, newPrescription);
  return data.prescription;
};

export const getPrescriptionList = async (userId) => {
  const { data } = await ppApi.get(`/prescriptions/user/${userId}`);
  return data.prescriptions;
};
