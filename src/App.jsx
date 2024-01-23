import { useState } from "react"
function App() {
  const [color,  setColor] = useState("olive");

  let colors = ["Red", "Green", "Blue", "Olive", "Grey", "Yellow", "Pink", "Purple", "Lavender", "White", "Black"]
  return (
    <div className="w-full h-screen duration-200 " style = {{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2" >
        

        {/* <button onClick={() => setColor(colors[0].toLowerCase())} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor : colors[0].toLowerCase()}}>{colors[0]}</button>

        <button onClick={() => setColor(colors[1].toLowerCase())} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor : colors[1].toLowerCase()}}>{colors[1]}</button>
        <button onClick={() => setColor(colors[2].toLowerCase())} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor : colors[2].toLowerCase()}}>{colors[2]}</button>
        <button onClick={() => setColor(colors[3].toLowerCase())} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor : colors[3].toLowerCase()}}>{colors[3]}</button>
        <button onClick={() => setColor(colors[4].toLowerCase())} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor : colors[4].toLowerCase()}}>{colors[4]}</button>
        <button onClick={() => setColor(colors[5].toLowerCase())} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor : colors[5].toLowerCase()}}>{colors[5]}</button>
        <button onClick={() => setColor(colors[6].toLowerCase())} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor : colors[6].toLowerCase()}}>{colors[6]}</button>
        <button onClick={() => setColor(colors[8].toLowerCase())} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor : colors[8].toLowerCase()}}>{colors[8]}</button>
        <button onClick={() => setColor(colors[9].toLowerCase())} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor : colors[9].toLowerCase()}}>{colors[9]}</button>
        <button onClick={() => setColor(colors[10].toLowerCase())} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor : colors[10].toLowerCase()}}>{colors[10]}</button> */}


    {colors.map((item)=><button onClick={() => setColor(item.toLowerCase())} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor : item.toLowerCase(), color : item === "Black" ? "white" : "black"}}>{item}</button>)}
        </div>
      </div>
    </div>
  )
}

export default App
