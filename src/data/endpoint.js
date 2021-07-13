import CONFIG from './config';

export const getKisahNabi = async (query) => {
  let url = `${CONFIG.BASE_URL}/kisahnabi?nabi=${query}`;
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

export const getHadis = async (query) => {
  let url = `${CONFIG.BASE_URL}/json/hadith/${query}`;
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
