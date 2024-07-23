# ALTCHA Widget with Vite + Solid.js

This is an example Solid.js project using the [ALTCHA](https://altcha.org) widget.

## Overview

ALTCHA is a free, open-source, self-hosted solution designed to protect websites, APIs, and online services from spam and unwanted content. It leverages a proof-of-work mechanism and is fully GDPR compliant, as it does not use cookies, fingerprinting, or tracking of any kind.

## Get Started

To quickly get your project up and running with the ALTCHA widget, follow these steps:

1. Clone this repository and navigate to the project directory:

```sh
git clone https://github.com/altcha-org/altcha-starter-solid-ts.git
cd altcha-starter-solid-ts
```

2. Install the project dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm run dev
```

## Creating a New Project Using Vite

If you prefer to create a new project from scratch, here are the steps:

1. Create a new Vite project with the Solid.js template:

```sh
npm create vite@latest my-solid-app -- --template solid-ts
```

2. Navigate to your project directory:

```sh
cd my-solid-app
```

3. Install the ALTCHA widget package:

```sh
npm install altcha --save
```

4. Import the `altcha` package in your project:

```javascript
// src/index.jsx or src/main.jsx
import 'altcha';
```

5. Use the `<altcha-widget>` element in your component:

```jsx
// src/components/ExampleComponent.jsx
import { Component } from 'solid-js';

const ExampleComponent: Component = () => {
  return (
    <div>
      <h1>My Solid.js App with ALTCHA</h1>
      <altcha-widget challengeurl="https://your-challenge-url.com"></altcha-widget>
    </div>
  );
};

export default ExampleComponent;
```

6. Declare JSX.IntrinsicElements:

```tsx
declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      'altcha-widget': globalThis.JSX.IntrinsicElements['altcha-widget']
    }
  }
}
```

## Additional Configuration

Ensure your `challengeurl` points to the endpoint where ALTCHA's proof-of-work challenge is processed. Customize the component attributes as needed based on your specific use case.

## Conclusion

With these steps, you should have a Solid.js project running with the ALTCHA widget integrated. This setup helps protect your application from spam and unwanted content efficiently and compliantly. For more details, visit the [ALTCHA documentation](https://altcha.org/docs).