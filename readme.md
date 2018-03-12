# easy-interval

> Intervals made easy

## Install

```
$ npm install easy-interval
```

## Example usage

```js
const Interval = require('easy-interval');

const interval = new Interval(() => console.log('hello world'), 1000);

interval.start();

setTimeout(interval.stop, 5000); // or `interval.stop();`
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
