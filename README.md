# TriviaApp

An App that lets you find out how little you know about random stuff.

## Used packages

- [Expo](https://github.com/react-community/create-react-native-app) (it's now basically the same thing as create-react-native-app)
- [Redux](https://redux.js.org/) and [react-redux](https://redux.js.org/basics/usage-with-react)
- [redux-thunk](https://github.com/reduxjs/redux-thunk) - for easier asynchronous interactions with store
- [html-entities](https://github.com/mdevils/node-html-entities) - to parse HTML text from JSON data

## How it behaves

The _App.js_ only invokes the **TriviaApp** component and surrounds it with **react-redux**'s `Provider` component, so that we can use the Redux store throughout the whole application.

The store stores information about our questions, if the game is started or ended, and how many valid answers the user has given.

**TriviaApp** component decides which one of the child components should be rendered, depending on the information from Redux store. If the user hasn't started a new trivia game or there was an error fetching questions from the API, we stay in the **HelloScreen**. Otherwise, the **TriviaScreen** is displayed.

The **TriviaScreen** displays all questions one by one and lets user press _True_ or _False_ as an answer to the given question. After answering all questions, user is presented back the **HelloScreen**, but this time with their results.

If an error occurs (when the App can't reach the API), it's displayed on **HelloScreen** under the _Start Game_ button.
