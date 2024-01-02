function App() {
  return(
    <>
      <div className="container w-80 m-3 flex flex-col border-2 border-gray-500 p-2 rounded bg-slate-200">
        <img src="https://picsum.photos/id/237/240/220" alt="Random picture" className="object-contain"/>
        <p className="name text-red-700 font-bold">Dog</p>
        <p className="desc w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, consequatur.</p>
      </div>
    </>
  )
}

export default App;