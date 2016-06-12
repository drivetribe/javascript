# DTButton

## Installation

Install the module directly from npm private:

```bash
npm install @drivetribe/react-dom-button --save
```

## Usage

```js
import Button from '@drivetribe/react-dom-button';

click() {
  console.log('click');
}

<Button onClick={this.click} primary>
  Remove this block
</Button>
```

### Properties

#### active {boolean}

> add active class to the button

#### disabled {boolean}

> add disabled class to the button

#### primary {boolean}

> add primary  class to the button

#### success {boolean}

> add success class to the button

#### error {boolean}

> add error class to the button

#### secondary {boolean}

> add secondary class to the button
