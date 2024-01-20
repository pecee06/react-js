import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {Layout,Home,About,Signup,Login} from "./components/components"

// Creating router

const routeObj = createRoutesFromElements(
  // path tells on writing what in url would a component would render
  // element tells which component to render
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='login' element={<Login/>}/>
    {/* <Route path='userinfo/:user' element={<User/>}/> */}
    {/* "user" written after "/:" is where the parameter will be stored */}
    {/* The contents of this page will be generated dynamically */}
  </Route>
);

const router = createBrowserRouter(routeObj);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
