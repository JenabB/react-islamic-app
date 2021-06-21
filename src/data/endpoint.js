import CONFIG from './config';

export const getKisahNabi = async (query) => {
  let url = `${CONFIG.KISAH_NABI}${query}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error.response);
    });
};
