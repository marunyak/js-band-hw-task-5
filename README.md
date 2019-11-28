# js-band-hw-task-5

Demo: http://marunyak.github.io/js-band-hw-task-5

## Description
It is POC of the tracking system that helps collect data about transport.
What type of information it collect:

**Ships/Argosy**:
 - id
 - Model
 - Serial number/Name
 - Produced year
 - Capacity (in kg)
 - Average speed (in nm)
 - Count of team

**Trucks**:
 - id
 - Model
 - License plate
 - Produced year
 - Capacity (in kg)
 - Average speed (in km)
 - Type of gas

**Cost of delivery**:
 - Transport Model
 - Cost (by 1 kg of cargo)
 - Cost (by 1 km of distance)

## Table of Contents
* [Project structure](#project-structure)
* [Installation](#installation)
* [Available console commands](#other-commands)
* [Usage](#usage)
* [Technologies](#technologies)
* [Scripts description](#scripts-description)
* [Status](#status)
* [License](#license)

## Project structure
```sh
├── src/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   ├── modules/
│   │   │    ├── Catalog/
│   │   │    │   └── Catalog.js
│   │   │    ├── CostOfDelivery/
│   │   │    │   └── CostOfDelivery.js
│   │   │    ├── Form/
│   │   │    │   └── Form.js
│   │   │    ├── LocalStorage/
│   │   │    │   └── LocalStorage.js
│   │   │    ├── Pattern/
│   │   │    │   └── TransportFactory.js
│   │   │    └── Transport/
│   │   │        ├── Transport.js
│   │   │        ├── Truck.js
│   │   │        └── Ship.js
│   │   └── index.js
│   └── index.html
├── webpack/
│   ├── webpack.common.js
│   ├── webpack.prod.js
│   └── webpack.dev.js
├── babel.config.js
├── .travis.yml
├── package-lock.json
└── package.json
```
## Installation
1. Clone the reprository:
```sh
$ git clone https://github.com/marunyak/js-band-hw-task-5.git
```
2. Use [npm](https://npmjs.org/) to install node_modules
```sh
$ npm init
```
3. Run project:
```sh
$ npm run dev
```

## Available console commands
For build project:
```sh
$ npm run build
```

## Usage
User can:
- Add new ship
- Add new truck
- Add cost of delivery information

## Technologies
 - [Babel](https://babeljs.io/) - toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers
 - [Webpack](https://webpack.js.org/) - tool for bundle scritps
 - [Travis](https://docs.travis-ci.com/user/customizing-the-build/) - tool for CI
## Scripts description
* `./src/index.html` - main html file;
* `./src/css/main.css` - main css file with stylesheets;
* `./src/js/index.js` - main file where are event listeners that respond to button clicks also this file is responsible for rendering  catalog page;
* `./src/js/modules/Catalog/Catalog.js` - file where is the logic for rendering, adding to the catalog;
* `./src/js/modules/CostOfDelivery/CostOfDelivery.js` - file for work with cost of delivery;
* `./src/js/modules/Form/Form.js` - file for work with forms;
* `./src/js/modules/LocalStorage/LocalStorage.js` - file for work with LocalStorage for set and get JSON file with information;
* `./src/js/modules/Pattern/TransportFactory.js` - file for creating different transport class instances;
* `./src/js/modules/Transport/Transport.js` - file that describes the structure of all vehicles;
* `./src/js/modules/Transport/Ship.js` - file for working with an entity Ship;
* `./src/js/modules/Transport/Truck.js` - file for working with an entity Truck;
* `./webpack/webpack.common.js` - file for common webpack configuration;
* `./webpack/webpack.dev.js` - file for development webpack configuration;
* `./webpack/webpack.prod.js` - file for production webpack configuration;
* `babel.config.js` - file for babel configuration;
* `.travis.yml` - file for CI configuration;
* `package-lock.json` - automatically generated for any operations where npm modifies either the node_modules tree, or package.json;
* `package.json` - file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.

## Status
Project is: _in progress_

## License
[ISC]
