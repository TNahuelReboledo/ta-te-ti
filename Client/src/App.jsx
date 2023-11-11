import { useEffect, useState } from "react";
import Board from "./Components/Board/Board";
import Header from "./Components/Header/Header";

function App() {

   const [reset, setReset] = useState(null)

   const handleReset = () => {
      setReset(!reset)
   }

   useEffect(()=> {setReset(true)},[])

   return (
      <div className="flex flex-col justify-center items-center">
         <Header/>
         <Board reset={reset}/>

         <button className="p-3 m-5 border rounded-md hover:bg-[#ffffff05]" onClick={handleReset}>Reset</button>
      </div>
   );
}

export default App;
