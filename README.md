# Documentation

Start by creating two directories in your main root foder. One called the `server` and the other one `client`.

Navigate into `client` and execute `npx create-react-app@latest YOUR_PROJ_NAME`. If you don't want to make another folder and instead want all the files to be created within the selected folder, then change the name of the project to `./`

## Setting up React project for Boilerplate

1. Navigate into `package.json` for `client` and remove the `test` and `eject` commands. And install a dpendency by calling `npm i bootstrap`. Also install `npm i normalize.css`

2. Setup the project files properly. Delete the following files:

   - App.css
   - App.test.js
   - index.css
   - logo.svg
   - reportWebVitals.js
   - setupTests.js

3. Move into `index.js` and remove `reportWebVitals()` from the footer and accompnying import statement from the header. Also delete `index.css` import statement. Finally your index.js should look like:

```
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

```

4. Go into `App.js` and remove `import logo from './logo.svg'`. Also remove everything within function `App(){}` return statement and replac eall of the html with a single heading saying Hello World. Finally your App.js should look like:

```
import "./App.css";

function App() {
  return <h1>Hello World</h1>;
}

export default App;
```

## React Project Investigation

When done with the setup, you'll realize you have a project default configuration in your hands, you have two main files called `index.js` and `App.js`. Everything major that eventually renders on the screen of the client has to be executed within `App.js`.

If you remember, we previously installed two dependencies called Bootstrap and Normalize.css. It's time to include those libs in your project through `node_modues` and import statements.

Navigate into `index.js` and `import normalize.css` as well as `import 'bootstrap/dist/css/bootstrap.min.css';` and close index.js and forget about it for now.

Keep in Mind that a React component will only be able to return a single parent tag or node. So if you have a lot of child tags, please encapsulate all those tags within a single parent tag such as div, section, main, ul, ol etc depending on the children that you want to render.
Also notice that a react component is always a function with a `CAPITALIZED NAME`.

Tomorrow we will lear, `Import` and `exports` and `default exports`. We'll look into the `javascript Functions`, `javascript data types`, `react functions and components` and try to understand what an SPA(Single Page Application) is.
