# @drivetribe/utils-date-formatters

Collection of date formatter functions to format ISO dates for display purposes.

## Install

Install the module directly from npm:

```
npm install @drivetribe/utils-date-formatters --save
```

## Formatters

### Relative Date

Converts ISO date or Unix timestamp to a relative date like "just now" or "5 days ago".

`relativeDate(date: number||string): string`

### Convert seconds to duration

Converts a time, given in seconds, to a human-readable duration in the [HH:M]M:SS format.

`convertSecondsToDuration(seconds: number): string`