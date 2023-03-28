import Navbar from "./Navbar";
import Lisa from "../img/lisa.webp"
import Hornet from "../img/hornet.jpeg"
import Sans from "../img/sans.png"
import Characters from "./Characters";
import GameImage from "./GameImage";
import TargetBox from "./TargetBox"

import HighscoreModal from "./HighscoreModal";
import HighscoreTable from "./HighscoreTable"
import { useEffect, useState } from "react";
import { firestore } from "./utils/firebase";
import { query, collection, addDoc, getDocs,getDoc,where, QuerySnapshot } from "firebase/firestore";



function WheresWaldo({x,y,setx,sety}) {
   const [characters, setCharacters] = useState([{name: "Lisa", img_src: Lisa, found: false},{name: "Hornet", img_src: Hornet, found: false}, {name: "Sans", img_src: Sans, found: false}])
   const [clicked, setclicked] = useState(false);
   const [firstClick, setfirstClick] = useState(false);
  const [targetXPercent, settargetXPercent] = useState(0);
  const [targetYPercent,settargetYPercent] = useState(0);


  /*
  const getCharacterData = async() => {
    let charData

    const q = query(collection(firestore,"characters"), where("name", "==" ,"Hornet"));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
      charData = querySnapshot.docs[0].data()
      console.log(`Name: ${charData.name}`)
      console.log(`X: ${charData.coordinates[0]}`)
      console.log(`Y: ${charData.coordinates[1]}`)
    }
  }
  */
    

    function isFound(charXCoord,charYCoord,targetXPercent,targetYPercent) {
      const minX = charXCoord - 3;
      const maxX = charXCoord + 3;
      const minY = charYCoord - 3;
      const maxY = charYCoord + 3;

      return((targetXPercent >= minX && targetXPercent <= maxX) && (targetYPercent >= minY && targetYPercent <= maxY));
    }

    async function isCharFound(targetXPercent,targetYPercent,charName) {
        let charData;
        const q = query(collection(firestore,"characters"), where("name", "==" ,charName));
        const querySnapshot = await getDocs(q);
        try {
          charData = querySnapshot.docs[0].data();
          const charXCoord = charData.coordinates[0];
          const charYCoord = charData.coordinates[1];
          if (isFound(charXCoord,charYCoord,targetXPercent,targetYPercent)) {
            // Set the target characters state dic to true
            console.log(`${charName} found`)
          }

        } catch(e) {
          console.log(`Error: ${e}`)
        }
    }
  

  

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
          <GameImage setx={setx} sety = {sety} setclicked = {setclicked} clicked = {clicked} settargetXPercent = {settargetXPercent} settargetYPercent = {settargetYPercent}/>
          {clicked === true && <TargetBox x = {x} y = {y} setx = {setx} sety = {sety} characters = {characters} setclicked = {setclicked} clicked = {clicked} targetXPercent = {targetXPercent} targetYPercent = {targetYPercent}/>}
        </div>
      </div>
    </div>
  )
}

export default WheresWaldo