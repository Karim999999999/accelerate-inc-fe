import axios from 'axios';
import baseUrl from '../config.js';

export const getAllAthletesPrivate = async () => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/athletes`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);

  return data;
};
export const getApprovedAthletesPublic = async () => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/approved-athletes`,
  };

  const { data } = await axios.request(options);

  return data;
};

export const getAthletesByStatusPrivate = async (status) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/manage/athletes/status/${status}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };
  const { data } = await axios.request(options);

  return data;
};
export const createNewAthlete = async (formData) => {
  const options = {
    method: 'PUSH',
    url: `${baseUrl}/athletes`,
    data: formData,
  };
  const { data } = await axios.request(options);

  return data;
};

export const getAthletesByIdPrivate = async (athleteId) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/athlete/${athleteId}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);

  return data;
};
// getAthletesByStatusPrivate,
// getAthletesByIdPrivate,
// getAthletesByIdPublic,
// editAthleteDetailsbyIdPrivate,
// deleteAthletePrivate,
// getAthletesAttendancePrivate,
// searchAthleteByNameAllAthletesPrivate,
// getAthletesMedicalIncidentsPrivate,
