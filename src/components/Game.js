import Navbar from "./Navbar";
import Lisa from "../img/lisa.webp"
import Hornet from "../img/hornet.jpeg"
import Sans from "../img/sans.png"
import Characters from "./Characters";
import GameImage from "./GameImage";
import TargetBox from "./TargetBox"

import HighscoreModal from "./HighscoreModal";
import HighscoreTable from "./HighscoreTable"
import { useState } from "react";



function WheresWaldo({x,y,setx,sety}) {
   const [characters, setCharacters] = useState([{name: "Lisa", img_src: Lisa, found: false},{name: "Hornet", img_src: Hornet, found: false}, {name: "Sans", img_src: Sans, found: false}])
   const [clicked, setclicked] = useState(false);
   const [firstClick, setfirstClick] = useState(false);

  return(
    <div className="flex flex-col">
      <div className="basis-1/4">
        <Navbar />
      </div>

      <div className="basis-1/4">
        <Characters character_list={characters} />
      </div>

      <div className="basis-full">
        <div className="relative">
          <GameImage setx={setx} sety = {sety} setclicked = {setclicked} clicked = {clicked}/>
          {clicked === true && <TargetBox x = {x} y = {y} setx = {setx} sety = {sety} characters = {characters} setclicked = {setclicked} clicked = {clicked}/>}
        </div>
      </div>
    </div>
  )
}

export default WheresWaldo