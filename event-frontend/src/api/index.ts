import axios from 'axios';

const instance = axios.create({
  baseURL:
    window.location.hostname === 'localhost' ? 'http://localhost:1337/' : '',
  headers: {
    'X-API-KEY': 'Sk7$3B&gSk'
  }
});

export const appAPI = {
  connectAPI() {
    return instance.get(``).then(
      (response: {
        data: {
          message: string;
        };
      }) => response.data
    );
  }
};

export const usersAPI = {
  getUsers() {
    return instance.get(`api/users`).then(response => response.data);
  }
};

export const eventAPI = {
  saveUser(
    firstName: string,
    lastName: string,
    email: string,
    eventDate: Date
  ) {
    return instance
      .post(`api/users`, { firstName, lastName, email, eventDate })
      .then(response => response.data);
  }
};
