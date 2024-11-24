const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagramgit';

const Route = {
  GET_DATA: '/data',
};

const Method = {
  GET: 'GET',
};

const ErrorText = {
  [Method.GET]: 'Не удалось загрузить данные. Попробуйте позже.',
};

const load = (route, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, { method, body })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(ErrorText[method]));
    })
    .catch((error) => {
      throw error;
    });

const getData = () => load(Route.GET_DATA, Method.GET);

export { getData };
