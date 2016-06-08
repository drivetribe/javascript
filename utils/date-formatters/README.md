# @drivetribe/utils-date-formatters

Collection of date formatter functions to format ISO dates for display purposes.

## Installation

Install the module directly from npm:

```
npm install @drivetribe/utils-date-formatters --save
```

## Formatters

### Relative Date

Converts ISO date or Unix timestamp to a relative date like "just now" or "5 days ago".

`relativeDate(quant: number||string): string`

#### Example

```js
import { relativeDate } from '@drivetribe/utils-date-formatters';

relativeDate("2016-05-18T12:00:00Z"); // 
```

