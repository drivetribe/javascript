# @drivetribe/react-dom-layout

A reusable layout components, build with ES2015.

## Installation

Install the module directly from npm:

```
npm install @drivetribe/react-dom-column --save
```

## Usage

```js
import Column from '@drivetribe/react-dom-column';

<div>
  <Column unit="1-3" unitMd="1-2">
    Some content here
  </Column>
  <Column unit="1-3" unitMd="1-2">
    Some content here
  </Column>
  <Column unit="1-3" unitMd="1-2" className="Could be some className here">
    Some content here
  </Column>
</div>
```
## Properties

`Column` component of react-dom-layout accepts next break point properties:
`unit`, `unitSm`, `unitMd`, `unitLg`, `unitXl`.

For the related minimal width of device screens:
**all, 568px, 768px, 1024px, 1280px**.

Break point property could have these string values:  
`1-2` - which means that Column would be 50% width.  
`1-3` - which means that Column would be 1/3 of 100% width.
`2-3` - which means that Column would be 2/3 of 100% width.
`1-4` - which means that Column would be 20% width.  

`Column` can accept any additional properties
including `className` and pass them down to element.
