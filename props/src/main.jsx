import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from "./Components/Card"
import "./global.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container'>
      {/* Arguments are passed as attributes in the component */}
      <Card url="https://picsum.photos/seed/picsum/300/250" title="Static Random Image-1" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident tenetur laudantium sint neque, dolorum inventore?"/>

      <Card url="https://picsum.photos/300/250?grayscale" title="Static Random Image-2" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident tenetur laudantium sint neque, dolorum inventore?"/>

      <Card url="https://picsum.photos/id/237/300/250" title="Static Random Image-3" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident tenetur laudantium sint neque, dolorum inventore?"/>
      
      <Card url="https://picsum.photos/id/240/300/250" title="Static Random Image-4" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident tenetur laudantium sint neque, dolorum inventore?"/>

      <Card url="https://picsum.photos/id/137/300/250" title="Static Random Image-5" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident tenetur laudantium sint neque, dolorum inventore?"/>

      <Card url="https://picsum.photos/id/235/300/250" title="Static Random Image-6" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident tenetur laudantium sint neque, dolorum inventore?"/>
    </div>
  </React.StrictMode>,
)
