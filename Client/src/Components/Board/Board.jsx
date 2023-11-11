import React from "react";
import Square  from './Square';

function Board({reset}) {
   return (
      <div className="w-96 h-96 grid grid-cols-3 grid-rows-3 gap-2">
         <Square reset={reset}/>
         <Square reset={reset}/>
         <Square reset={reset}/>

         <Square reset={reset}/>
         <Square reset={reset}/>
         <Square reset={reset}/>

         <Square reset={reset}/>
         <Square reset={reset}/>
         <Square reset={reset}/>
      </div>
   );
}

export default Board;
