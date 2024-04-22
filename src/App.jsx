import React from "react";
import Button from "./components/Elements/Button"
function App() {
   return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-2">
        <Button warna="bg-black" >Hai Badut</Button>
        <Button warna="bg-red-700"> Kamu Lagi apa</Button>
        <Button warna="bg-slate-700">Dont Die.!</Button>
      </div>
    </div>
  )
}
export default App;