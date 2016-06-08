# @drivetribe/utils-number-formatters

Collection of number formatter functions to change numbers for display purposes.

## Installation

Install the module directly from npm:

```
npm install @drivetribe/utils-number-formatters --save
```

## Formatters

### Approximate

Approximates large numbers, ie 6426 -> "6.4K".

`approximate(quant: number||string): string`

#### Example

```js
import { approximate } from '@drivetribe/utils-number-formatters';

approximate(5134924); // "5.1M"
approximate("5134924"); // "5.1M"
```

Rounds numbers greater than 1000, up to the millions.

### Round to decimal place

Rounds a number to a given decimal place.

`roundToDecimalPlace(quant: number, roundTo: number): number`

#### Example

```js
import { roundToDecimalPlace } from '@drivetribe/utils-number-formatters';

roundToDecimalPlace(12.34567, 1); // 12.3
roundToDecimalPlace(12.34567, 2); // 12.35
```
