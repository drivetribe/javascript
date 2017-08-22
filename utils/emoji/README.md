# @drivetribe/emoji

Categorised lists of emoji.

## Install

```
npm install @drivetribe/emoji --save
```

## JSON format

```
{
  "title": "Category",
  "description": "A named category containing a subset of emoji characters",
  "type": "array",
  "items": {
    "title": "Emoji",
    "description": "An array of sorted objects describing each emoji in the category",
    "type": "object",
    "properties": {
      "unicode": {
        "description": "An array of notationless unicode characters"
        "type": "array",
        "items": {
          "type": "string"
        },
        "minItems": 1
      },
      "displayCode": {
        "description": "A HTML-escaped unicode character representing the emoji"
        "type": "string"
      }
    }
  }
}
```

## Develop

To update the list of emoji, run `node convert` in the root of this package.
