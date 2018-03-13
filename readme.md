# easy-interval

> Intervals made easy

## Install

```
$ npm install easy-interval
```

## Example usage

With stopping outside of interval function:

```js
const Interval = require('easy-interval');

const interval = new Interval(() => console.log('hello world'), 1000);

interval.start();

setTimeout(interval.stop, 5000); // or `interval.stop();`
```

With stopping inside of interval function:

```js
const axios = require('axios');
const Interval = require('easy-interval');

const interval = new Interval(async ({stop}) => {
  try {
    const {data} = await axios.get('https://store-api.io/transactions/1');
    if (data.status === 'complete') {
      console.log(data);
      // Do stuff with `data`
      stop();
    }
  } catch (err) {
    console.error(err);
  }
}, 1000);

interval.start();
```


## API

### Interval(fn, delay)

#### fn

Type: `function`

The function to set an interval on.

#### delay

Type: `number`

The time period in milliseconds.

### Methods

#### `Interval.start()`

#### `Interval.stop()`

## License

MIT © [jxom](http://jxom.io)
