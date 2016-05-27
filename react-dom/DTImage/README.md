# @drivetribe/react-dom-image

A reusable image component, build with ES2015.

## Installation

Install the module directly from npm:

```
npm install @drivetribe/react-dom-image --save
```

## Usage

```js
import DTImage from '@drivetribe/react-dom-image';

// 'data' JSON from the API
// 'source', 'width' and 'height' attributes are required
const data = {
  source: 'path to image',
  width: 300,
  height: 300
};

// 'data' is required property.
// Additional 'width' and 'height' properties are optional
// and will rewrite `width` and `height` from `data`.
// More optional props could be provided.
<DTImage data={data} width={200} height={200} {...props}/>
```
