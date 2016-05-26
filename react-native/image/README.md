# @drivetribe/react-native-image

A React Native component for automatically taking API data and generating an `Image` component with the appropriate Imgix query parameters.

## Installation

Install the module directly from npm:

```
npm install @drivetribe/react-native-image --save
```

## Usage

```js
import DTImage from '@drivetribe/react-native-image';

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
