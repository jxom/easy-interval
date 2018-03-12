import test from 'ava';
import sinon from 'sinon';
import Interval from '.';

test.cb('starts correctly', t => {
  const spy = sinon.spy();
  const interval = new Interval(spy, 1000);
  interval.start();
  setTimeout(() => {
    t.true(spy.callCount === 4);
    t.end();
  }, 5000);
});

test.cb('stops correctly', t => {
  const spy = sinon.spy();
  const interval = new Interval(spy, 1000);
  interval.start();
  setTimeout(() => {
    interval.stop();
    setTimeout(() => {
      t.true(spy.callCount === 2);
      t.end();
    }, 2000);
  }, 3000);
});

test.cb('stop inside interval works correctly', t => {
  const spy = sinon.spy();
  let timesCalled = 0;
  const interval = new Interval(({stop}) => {
    spy();
    if (timesCalled === 2) {
      stop();
    }
    timesCalled++;
  }, 1000);
  interval.start();
  setTimeout(() => {
    t.true(spy.callCount === 3);
    t.end();
  }, 5000);
});
