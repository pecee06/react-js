import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

function Component() {
  return(
    <h1>Custom Component</h1>
  )
}

const ReactObj = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank"
  },
  "Click here for Google.com"
);

// React.createElement() -> creates a React object
// The arguments should be passed in this order only - tag,props,content

ReactDOM.createRoot(document.getElementById('root')).render(
  // ReactObj
  <React.StrictMode>
    <App />
    <Component/>
  </React.StrictMode>,
)
