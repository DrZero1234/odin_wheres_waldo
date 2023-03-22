import Navbar from "./Navbar";
import Lisa from "../img/lisa.webp"
import Characters from "./Characters";
import GameImage from "./GameImage";
import TargetBox from "./TargetBox"
import HighscoreModal from "./HighscoreModal";
import HighscoreTable from "./HighscoreTable"
import { useState } from "react";



function WheresWaldo({x,y,setx,sety}) {
   const [characters, setCharacters] = useState([{name: "character1", img_src: Lisa},{name: "character2", img_src: Lisa}, {name: "character3", img_src: Lisa}])
   const [clicked, setclicked] = useState(true);
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
          <GameImage />
          {clicked === true && <TargetBox x = {x} y = {y} setx = {setx} sety = {sety} characters = {characters}/>}
        </div>
      </div>
    </div>
  )
}

export default WheresWaldo