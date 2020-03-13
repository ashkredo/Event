## :repeat: Event Backend [Demo](http://event-register-api.herokuapp.com/)


| Method    | URI                   | Action                                  | Validation                                       |
| ---       | ---                   | ---                                     | ---                                              |
| `GET`     | `/api/users`     | get all the users                  | _none_                                           |
| `GET`     | `/api/users/:id` | get a specific user by its `id`    | validate `id` in path                            |
| `POST`    | `/api/users`     | create a new user                   | validate request body                        |

### :santa: User
- First name (required)
- Last name (required)
- Email (required, valid email address)
- Event date (required, simple date picker)

### :basketball: Postman

**GET /api/users**

![alt text](https://cdn1.savepice.ru/uploads/2020/3/13/e610b1173f5bda359f0fb494318e5a78-full.png)

**GET /api/users/:id**

![alt text](https://cdn1.savepice.ru/uploads/2020/3/13/bc0259851e372dfbe4e901a1afe29f26-full.png)

**POST /api/users**
![alt text](https://cdn1.savepice.ru/uploads/2020/3/13/6b61ef008f20055894196f44c9bf7298-full.png)

**API-KEY**
![alt text](https://cdn1.savepice.ru/uploads/2020/3/13/d20e752e92cd8b65e96f139bad0aaf5a-full.png)
