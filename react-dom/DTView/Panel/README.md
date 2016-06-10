# DTView > Panel

## Installation

Install the module directly from npm private:

```bash
npm install @drivetribe/react-dom-panel --save
```

## Usage

```js
import Panel from '@drivetribe/react-dom-panel';

const footerText = (
  <h3>Panel title</h3>
);

<Panel header="My funky title" footer={footerText}>
  ... // child components live here
</Panel>
```

### Properties

#### header {string/object}

> header tends to be a title but it can be anything your imagination can generate (component, string).

#### footer {string/object}

> footer tends to be a title but it can be anything your imagination can generate (component, string).
