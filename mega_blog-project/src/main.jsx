import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from "./store/store"
import {Home, About, Login, Signup, Post, Posts, Password} from "./pages/pages"
import {Layout} from './components/components'

const routes = createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>} />
    <Route path='about' element={<About/>} />
    <Route path='signup' element={<Signup/>} />
    <Route path='login' element={<Login/>} />
    <Route path='posts' element={<Posts/>}>
      <Route path='/:id' element={<Post/>} />
    <Route />
    <Route path='change-password' element={<Password/>}/>
  </Route>
)

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)