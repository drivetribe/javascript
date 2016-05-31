# @drivetribe/react-dom-layout

A reusable layout components, build with ES2015.

## Installation

Install the module directly from npm:

```
npm install @drivetribe/react-dom-layout --save
```

## Usage

```js
import DTGrid from '@drivetribe/react-dom-layout/Grid';
import DTColumn from '@drivetribe/react-dom-layout/Column';

<Grid>
  <Column unit="1-3" unitMd="1-2">
    Some content here
  </Column>
  <Column unit="1-3" unitMd="1-2">
    Some content here
  </Column>
  <Column unit="1-3" unitMd="1-2">
    Some content here
  </Column>
</Grid>
```
## Properties

Column component of react-dom-layout accepts next break point properties:
`unit`, `unitSm`, `unitMd`, `unitLg`, `unitXl`,
for the related minimal width of devices screens:
all, 568px, 768px, 1024px, 1280px

Break point property could have next formats:
`1-2` - which means that Column would be 50% width.
`1-5` - which means that Column would be 20% width.
`2-3` - which means that Column would be 2/3 of 100% width.
