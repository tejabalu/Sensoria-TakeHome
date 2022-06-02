# Get Activities

This is an app that suggests new activities to do when one is bored.

The project uses the [bored api](https://boredapi.com/api/) to get suggestions.

## Application Features

The following are the list of features currently implemented:

-   The user can click a button to get a new activity.
-   The user can filter the activities by category, and number of participants required for the activity.
-   The user can see the previous activities that were suggested in the history tab. This data persists, and remains in the application even if the website/browser is closed, or even if the user restarts the application. When the user clears the cache and localstorage of the browser, the history tab will be cleared.
-   The user can select and remove selected activities from the history tab.

## Features yet to be implemented:

The following are the features that are yet to be implemented:

-   Customized 404 page for the application.
-   Notification to the user incase the API fails to respond.
-   The current history view does not show the activities in the order they were suggested. In the future, the view should be sorted so that the user sees the latest suggestions first in the history tab.

> The live version of this app is available on [Vercel](https://getactivities-tejabalu.vercel.app/)

## Stacks used:

The following are the stacks used for creating this app:

-   [React](https://reactjs.org/)
    -   React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
-   [React Hooks](https://reactjs.org/docs/hooks-intro.html)
    -   React hooks allows one to use state and other React features without writing a class.
-   [TypeScript](https://www.typescriptlang.org/)
    -   Typescript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.
-   [Chakra UI](https://chakra-ui.com/) - Chakra UI is a library of components for React. It is designed to be a drop-in replacement for the React ecosystem's existing components.
    This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
-   [Bored API](https://boredapi.com/)
    -   Bored API is a free API that provides a random activity suggestions.

---

## Installation steps to run the application locally.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br /> See the section
about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is
ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

---

### Thanks for visiting!
