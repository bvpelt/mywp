# Description

## Tools
### Bootstrap
- install bootstrap using `npm install bootstrap`
- update angular.json add node_modules/bootstrap/dist/css/bootstrap.min.css in the "styles" section

### NgRx
- See [How to Start Flying with Angular and NgRx](https://indepth.dev/how-to-start-flying-with-angular-and-ngrx/)
- See [Angular Routing Data with NGRX Effects](https://medium.com/@amcdnl/angular-routing-data-with-ngrx-effects-1cda1bd5e579)

### Json Server
See [https://github.com/typicode/json-server](https://github.com/typicode/json-server)

- Create a file in this case articles.json and put the file at the root directory of this project.
- use npm to install the json-server with `npm install json-server`
- add json-server to package.json in the "scripts" section with `"json-server": "json-server --watch articles.json"`
- to start the json-server use `npm run json-server`
