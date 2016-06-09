# @drivetribe/react-dom-default-input

A DefaultInput component, build with ES2015.
Could be used as a basis for building more complicated Input Components

## Installation

Install the module directly from npm:

```bash
npm install @drivetribe/react-dom-default-input --save
```

## Usage

```js
import DefaultInput from '@drivetribe/react-dom-default-input';

<DefaultInput onChange={() => someFunction()} onClick={() => someFunction()} />

<DefaultInput type="text" error className={styles.additionalClassName} {...props} />

<DefaultInput type="email" valid value={value} {...props} />

<DefaultInput type="password" disabled placeholder="Enter password" />
```
