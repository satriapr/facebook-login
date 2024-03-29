# Facebook Login

This is a simple Facebook login with passport using React.js, generated using create-react-app.

## Demo
[![Facebook Login](https://s10.gifyu.com/images/Facebook-Login.gif "Facebook Login")](https://s10.gifyu.com/images/Facebook-Login.gif "Facebook Login")

## Technical overview

### I. Main dependency libraries
- [Axios](https://github.com/axios/axios): promise based HTTP client
- [Lodash](https://lodash.com/): functional library for general use
- [ESLint](https://eslint.org/) Javascript linter for ES pattern
- [Prettier](https://prettier.io/) Code formatter
- Other supporting libraries, can be found in package.json

### II. Source code architecture
- components folder: Re-usable component, contain stateless component and hooks
- constants folder: Constant
- modules folder: Web pages
- services: Interaction with API
- utils: Helper
- *View file: UI of the screen
- *Handler file: Hooks, event handler, logic

### III. Run and Test

Please run the BackEnd first (http://localhost:5000):
- https://github.com/satriapr/realestate-express

To run project (npm - http://localhost:3000):
```bash
npm i && npm start
```

To run project (docker - http://localhost:3000):
- Please let me know if docker is needed, I will prepare a docker image to run the project.

To run test:
```bash
npm test
```

## What can be improved

### I. Feature
- UI need to be improved. Can use library, e.g. Material UI

### II. Code and library
- Need to add unit test and end to end test


## License
[MIT](https://choosealicense.com/licenses/mit/)
