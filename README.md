# uuid-extra
Uniqueness and Randomness combined

Using UUID library, combining Uniqueness(uuidv1) and Randomness(uuidv4), trying to get randomly unique solution to generate universally unique identifier. 


## Install

### NPM
```sh
npm install uuid-extra
```


## how to use 

### `ex14()`
First extra function which combines the `uuidv1` and `uuidv4` output and uses `Math.random` for selecting bits and generates 

```js
const uuidex = require('uuid-extra');

console.log(`EX14: ${uuidex.ex14()}`);
```

### `v1()`
Original `uuidv1` function

```js
const uuidex = require('uuid-extra');

console.log(`V1: ${uuidex.v1()}`);
```

### `v4()`
Original `uuidv4` function

```js
const uuidex = require('uuid-extra');

console.log(`V4: ${uuidex.v4()}`);
```


**Note:** All the credits goes to original UUID [[Github](https://github.com/kelektiv/node-uuid "Github"), [NPM](https://www.npmjs.com/package/uuid "NPM")] for such useful module.