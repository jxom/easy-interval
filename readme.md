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
const Interval = require('easy-interval');

const interval = new Interval(({stop}) => {
  console.log('hello world');
  if (status === 'complete') {
    stop();
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
