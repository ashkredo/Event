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
  getUsers() {
    return instance.get(`api/users`).then(response => response.data);
  }
};

export const eventAPI = {
  saveUser(firstName, lastName, email, eventDate) {
    return instance
      .post(`api/users`, { firstName, lastName, email, eventDate })
      .then(response => response.data);
  }
};
