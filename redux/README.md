# Redux

* Just like context API, redux is also a state management library
* It came long before context API and have better data flow

# Redux Toolkit

It was originally created to help address three common concerns about Redux:
* Configuring a Redux store is too complicated (Store is something like a centralized place which stores all the states)

* Had to add a lot of packages to get Redux to do anything useful

* Redux requires too much boilerplate code (Too much copy-pasting)

# React Redux

Now Redux is not confined to React only, it can be used with any JS library or framework. So the Redux library acts as a bridge connecting Redux logic & React components

## Getting Started

* npm install @reduxjs/toolkit
* npm install react-redux
* create store.js (Every application has a single store which is called the single source of truth)
* Configure the store using configureStore function. For that we require a reducer
* reducer is an object which contains all the slice-reducers in your application
* Create slices under "features"
* For creating a slice we have createSlice function which accepts an object having 3 keys - name, initialState, reducers
* name is used for deriving "type" of action object
* initialState is an object with "value" as key and the initial state of the slice as its value
reducers is an object that contains all the reducers you define for that slice
* Every reducer provides you with 2 values - state & action
* state represents the current state of slice in the store and action is an object that contain 2 keys - type & payload
* "type" is deduced by createSlice automatically and the payload is needed to be passed as an argument while dispatching a state change from a component
* We need to make our reducers pure, i.e., that should not change the current state. Rather they should return the new state. Now this was pain in the a## as we would need to make a copy of state object and then change its value and return the new object. createSlice saves us from this, as it uses immer internally which converts our mutable code to immutable code. So we can directly update the state and immer will make the function pure for us
* Export the reducers individually as actions
* Default export the slice.reducer (which will be acccssed by store for its configuration)
* Wrap main.jsx within Provider that takes a required argument "store" (That we made earlier - store.js)

## Component Creation

2 methods to keep in mind:
* useDispatch - Allows to dispatch state changes to store from React components
**Syntax**
const dispatch = useDispatch()
dispatch(<reducer-function>(payload))

* useSelector - Allows you to fetch state of a slice from store
**Syntax**
const value = useSelector((state)=>{
    return state.<slice-name>.value
})