import './App.css'

function App() {
  return (
    <div className="flex flex-col justify-between w-screen h-screen py-5 px-1">
      <header>
        <h1 className="text-3xl text-center underline">
          INTERVAL
        </h1>
      </header>

      <main className="text-center">
        <div className="p-5 border border-black">
          <p>On</p>
          <h3>0s</h3>
        </div>
        <div className="p-5 border border-black">
          <p>Off</p>
          <h3>0s</h3>
        </div>
        <div className="p-5 border border-black">
          <p>Rounds</p>
          <h3>0</h3>
        </div>
        <div className="p-5 border border-black">
          <p>Prep time</p>
          <h3>0s</h3>
        </div>
        <div className="p-5 border border-black">
          <h3 className="font-bold">EXERCISES</h3>
        </div>
      </main>

      <footer className="self-center w-1/2 text-center">
        <div className="p-2.5 mb-2.5 border border-black">clear</div>
        <div className="p-2.5 border border-black">Set</div>
      </footer>
    </div>
  )
}

export default App
