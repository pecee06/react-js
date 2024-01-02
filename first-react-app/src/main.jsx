import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    {/* App is a component */}
    {/* We can create multiple components and add them here */}
    {/* Components are like custom HTML tags */}
    {/* Just the way how classes allow us to create custom datatypes in any programming language */}
  </React.StrictMode>,
);