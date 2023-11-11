import React, { useEffect, useState } from "react";
import { BiBody, BiChild } from "react-icons/bi";

const Player = {
   p1: <BiChild />,
   p2: <BiBody />,
};

function Square({reset}) {

   const [player, setPlayer] = useState(true);

   const handlerPlayerPlay = () => {
      setPlayer(!player);
   };

   useEffect(()=> {setPlayer(123)},[reset])

   return (
      <button className="Square" onClick={handlerPlayerPlay}>
         {player === 123 ?
         null : 
         player === true ? (
            <span className="text-Red-X">{Player.p1}</span>
         ) : (
            <span>{Player.p2}</span>
         )
         }
      </button>
   );
}

export default Square;
