# angular2-meteor-base
Reference from
https://github.com/Urigo/angular2-meteor-base

Just make sure not any error on dependencies.

## Installation

```
npm install 
or
yarn

Extra npm if does not exist or cause the error, could rerun on following command.
meteor add accounts-password
meteor add npm-bcrypt
meteor npm install --save bcrypt
meteor npm install --save angular2-meteor-accounts-ui
```

## NPM Scripts

This boilerplate comes with predefined NPM scripts, defined in `package.json`:

- `$ npm run start` - Run the Meteor application.
- `$ npm run start:prod` - Run the Meteor application in production mode.
- `$ npm run build` - Creates a Meteor build version under `./build/` directory.
- `$ npm run clear` - Resets Meteor's cache and clears the MongoDB collections.
- `$ npm run meteor:update` - Updates Meteor's version and it's dependencies.
- `$ npm run test` - Executes Meteor in test mode with Mocha.
- `$ npm run test:ci` - Executes Meteor in test mode with Mocha for CI (run once).


```
"dependencies": {
    "@angular/common": "2.4.1",
    "@angular/compiler": "2.4.1",
    "@angular/core": "2.4.1",
    "@angular/forms": "2.4.1",
    "@angular/http": "2.4.1",
    "@angular/platform-browser": "2.4.1",
    "@angular/platform-browser-dynamic": "2.4.1",
    "@angular/router": "3.4.1",
    "angular2-meteor": "0.7.1",
    "angular2-meteor-accounts-ui": "^1.0.0",
    "angular2-meteor-polyfills": "0.1.1",
    "angular2-meteor-tests-polyfills": "0.0.2",
    "babel-runtime": "^6.18.0",
    "bcrypt": "^1.0.2",
    "meteor-rxjs": "0.4.7",
    "ng2-translate": "^5.0.0",
    "reflect-metadata": "0.1.9",
    "rxjs": "5.0.2",
    "zone.js": "0.7.4"
  }
```
