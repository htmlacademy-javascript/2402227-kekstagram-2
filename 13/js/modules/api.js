const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  POST_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  [Method.GET]: 'Не удалось загрузить данные. Попробуйте позже.',
  [Method.POST]: 'Ошибка при отправке данных. Попробуйте еще раз.',
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

const sendFormData = (formData) => load(Route.POST_DATA, Method.POST, formData);

export { getData, sendFormData };
