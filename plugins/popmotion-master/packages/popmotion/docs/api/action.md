---
title: Action
description: Create a reactive stream of values.
next: animations
---

# Action

Action is a simplified Rx-inspired reactive stream focused on animation.

**Every Popmotion animation and input is an action.**

When an action is started, it returns a simple interface that includes **at least** a `stop` method.

## Import

```javascript
import { action } from 'popmotion';
// or stand-alone:
import action from 'popmotion/action';
```

## Usage

### Definition

The `action` factory takes one argument, an `init` function.

This is a function that is provided an object of `update`, `complete`, and `error` functions.

Usage of these functions is optional. Your action may call all or just some of them:

```javascript
action(({ update, complete, error }) => {
  update(1);
});
```

### Initialisation

`action` returns a `start` method. This also accepts an object of `update`, `complete`, and `error` functions.

When called, the `init` function is provided these functions, and a **new instance** of the action is created.

Calling `start` multiple times will create multiple, separate instances of the action.

For example:

```javascript
const foo = action(({ update }) => {
  let i = 0;
  setInterval(() => update(i++), 50);
});

foo.start({
  update: (v) => console.log(v)
}); // 0, 1, 2...
```

If `start` is passed **only a function**, that is assigned to the `update` function:

```javascript
foo.start((v) => console.log(v)); // 0, 1, 2...
```

We can also listen for the `complete` event like this:

```javascript
const foo = action(({ update, complete }) => {
  let i = 0;
  setInterval(() => {
    update(i++);
    if (i === 10) complete();
  }, 50);
});

foo.start({
  update: (v) => console.log(v), // ...8, 9, 10
  complete: () => console.log('complete!')
});
```

### Interface

The `init` function can **optionally** return an API.

For instance, we might use this to stop a timer:

```javascript
const foo = action(({ update }) => {
  const interval = setInterval(() => update('ping!'), 100);

  return {
    stop: () => clearInterval(interval)
  };
});

const bar = foo.start(console.log);
setTimeout(() => bar.stop(), 1000);
```

Any method returned by the action `init` function will be exposed when an action instance is created.

### Modification

`action` is **chainable**, which means it offers methods that can alter the behaviour of the base action. Currently, these are `while` and `pipe` (see [Methods](#methods)).

When an action is chained, a **new action** is returned. For instance:

```javascript
const foo = action(({ update }) => {
  let i = 0;
  setInterval(() => update(i++), 50);
});

const lessThanTen = (v) => v < 10;
const log = (v) => console.log(v);

foo.start(log); // ...8, 9, 10, 11...
foo.while(lessThanTen).start(log); // ...8, 9
```

### Multicasting

Actions output **only** to the set of functions provided to `start`.

Popmotion also provides **[reactions](/api/reactions)**. These exposed `update`, `complete` and `error` methods, which mean we can use them to `start` actions.

They're also, like actions, chainable. They can be subscribed to by multiple other reactions:

```javascript
const foo = action(({ update }) => update(1));
const multicast = reaction();
const logDouble = reaction()
  .pipe((v) => console.log(v * 2));

multicast.subscribe((v) => console.log(v));
multicast.subscribe(logDouble);

foo.start(multicast); // 1, 2
```

## Methods

### `pipe`

```typescript
pipe(...funcs: (v: any) => any)
```

Returns a **new** action that passes the output of the original action's `update` through the provided functions, from left to right.

#### Example

```javascript
const init = ({ update }) => update(10);
const double = (v) => v * 2;
const px = (v) => v + 'px';

action(init)
  .pipe(double, px)
  .start((v) => console.log(v)); // '20px'
```

### `start`

```typescript
start(update: (v: any) => void)
start({
  complete? () => void,
  error?: (err: any) => void,
  update?: (v: any) => void
})
start(reaction)
```

Starts the action by running its initiation function, and returning its API.

Every interface returned by a `start` call, **regardless of the API returned from the observable**, will return at least a `stop` function.

It can be provided either an `update` function, or an object with `update`, `complete` and `error` functions.

#### Example

```javascript
// Doesn't return an API
const foo = action(({ update }) => update(1)).start();
foo.stop();

// Returns a custom API
const bar = action(({ update }) => {
  let i = 0;
  setInterval(() => update(i), 100);

  return {
    setOutput: (v) => i = v
  };
}).start();
bar.setOutput(2);
setTimeout(() => bar.stop(), 1000);
```

### `while`

```typescript
while(predicate: (v: any) => boolean)
```

Returns a new action, that will continue to run **while** the updated values match the provided predicate.

When the predicate function returns `false`, the action will `complete`.

### Example

```javascript
let latest = 0;

const init = ({ update }) => {
  let i = latest;
  setInterval(() => update(i++), 50);
};

action(init)
  .while((v) => v < 10)
  .start({
    update: (v) => latest = v,
    complete: () => console.log(v) // 9
  });
```
