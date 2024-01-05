# Redux

* Just like context API, redux is also a state management library
* It came long before context API and have better data flow

# Redux Toolkit

It was originally created to help address three common concerns about Redux:
* Configuring a Redux store is too complicated (Store is something like a centralized place which stores all the states)

* Had to add a lot of packages to get Redux to do anything useful

* Redux requires too much boilerplate code (Too much copy-pasting)

# React Redux

Now Redux is not confined to React only, it can be used with any JS library or framework. So the Redux library for React apps is React Redux which in turn requires either Redux or Redux Toolkit as a dependency

## Getting Started

* npm install @reduxjs/toolkit
* npm install react-redux
* create store.js (Every application has a single store which is called the single source of truth)
* Configure the store. For that we require a reducer
* Create a slice which contain all the reducers
* Wrap main.jsx within Provider that takes a required argument "store" (That we made earlier - store.js)

## Component Creation

2 methods to keep in mind:
* useDispatch - Allows to dispatch (execute) functions defined as reducers
* useSelector - Allows you to extract data from the Redux store state for using in a component