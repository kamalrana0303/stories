# Stories

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Plugins
Typescript Hero
Angular Natural Language Service

## Dependencies
oidc-client npm install oidc-client --save

## Scopes
scopes are high level access control identifier for backend resource such as api endpoint your app require access to

openid  (always when using openid connect)
profile (optional)
projects-api ( [user defined scope] client not configured with scope projects-api will get error when you attempt to login saying client has invalid client configuration to authorized scopes.)

## Usermanager

Afer successfull login usermanager store the resulting user object that it creates in session storage. So that it can be retrieve whenever it needed. Such as to get access token send to api calls.


## User 
User object containe id token , access token as well as expired flag. you can check access token is not expired.


#auth0

Grant type : Authorization code
app : stories
cors: http://localhost:4200
permission: projects-api