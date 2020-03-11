import * as axios from 'axios';

const instance = axios.create({
  baseURL:
    window.location.hostname === 'localhost' ? 'http://localhost:1337/' : '',
  headers: {
    'API-KEY': ''
  }
});

export const appAPI = {
  connectAPI() {
    return instance
      .get()
      .then(response => response.data)
      .catch(error => '');
  }
};

export const usersAPI = {
  saveUser(userData) {
    return instance.put(`api/users`, userData).then(response => response.data);
  },
  getUsers() {
    return instance.get(`api/users`).then(response => response.data);
  }
};
