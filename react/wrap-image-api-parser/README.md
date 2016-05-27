## Wrap component in image API parser

A function that returns the provided React component wrapped in a higher-order component that parses API data into a valid image URL and proportional dimensions (phew).

## Install

```js
npm install @drivetribe/react-wrap-image-api-parser
```

## Usage

```js
import wrapInImageApiParser from '@drivetribe/react-wrap-image-api-parser';

const WrappedComponent = wrapInImageApiParser(YourComponent);

<WrappedComponent data={imageApiResponse} width={200} />
```

In this example, `YourComponent` will receive `src`, `width` and `height` properties as calculated by your given parameters and the API data. `src` will be appended with the appropriate query strings to request the correctly sized image from the server.
