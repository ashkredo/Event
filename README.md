##  :raising_hand: Event Register App
Simple app with React on the front end side and connected with simple API written with Node.js.

## :sunrise_over_mountains: Demo
[Event-register-app](http://event-register-app.herokuapp.com/)

[Event-register-api](http://event-register-api.herokuapp.com/)

## :bookmark_tabs: Goals

*  frontend should be written in React (using Redux)
*  data from form should be saved in MongoDB and validated before saving
*  errors should be handled and displayed for the user
*  app must be tested

## :hammer: Installation
Open terminal and type:
```
git clone https://github.com/ashkredo/Event.git
cd event/event-backend
npm install
npm run dev
```
Open new terminal tab in project root folder and type:
```
cd event-frontend
npm install
npm start
```

##### :repeat: REST API 

| Method    | URI                   | Action                                  | Validation                                       |
| ---       | ---                   | ---                                     | ---                                              |
| `GET`     | `/api/users`     | get all the users                  | _none_                                           |
| `GET`     | `/api/users/:id` | get a specific user by its `id`    | validate `id` in path                            |
| `POST`    | `/api/users`     | create a new user                   | validate request body                        |
