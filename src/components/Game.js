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
   const [characters, setCharacters] = useState([{name: "Lisa", img_src: Lisa, found: true},{name: "Hornet", img_src: Hornet, found: true}, {name: "Sans", img_src: Sans, found: false}])
   const [clicked, setclicked] = useState(false);
   const [firstClick, setfirstClick] = useState(false);
  const [isGameOver, setisGameOver] = useState(false);
  const [targetXPercent, settargetXPercent] = useState(0);
  const [targetYPercent,settargetYPercent] = useState(0);
  const [time,setTime] = useState(0)
  const [username,setusername] = useState("");

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

  useEffect(() => {
    let intervalId;
    if (!isGameOver) {
      intervalId = setInterval(() => setTime(time + 1), 1000);
    }
    return () => clearInterval(intervalId)
  }, [isGameOver, time])
    
    function isAllFound() {
      return characters.every((character => character.found === true));
    }

    const restartGame = (e) => {
      e.preventDefault()
      setCharacters([{name: "Lisa", img_src: Lisa, found: true},{name: "Hornet", img_src: Hornet, found: true}, {name: "Sans", img_src: Sans, found: false}]);
      setclicked(false);
      setTime(0);
      setfirstClick(false);
      setisGameOver(false);
      settargetXPercent(0);
      settargetYPercent(0);
      setusername("")
    }

    function isFound(charXCoord,charYCoord,targetXPercent,targetYPercent) {
      const minX = charXCoord - 3;
      const maxX = charXCoord + 3;
      const minY = charYCoord - 3;
      const maxY = charYCoord + 3;

      return((targetXPercent >= minX && targetXPercent <= maxX) && (targetYPercent >= minY && targetYPercent <= maxY));
    }

    async function isCharFound(e,targetXPercent,targetYPercent,charName) {
        e.preventDefault();
        let charData;
        let characters_copy = [...characters]
        const q = query(collection(firestore,"characters"), where("name", "==" ,charName));
        // The dictionary according to charName
        const char_dic = characters.find((dic => dic.name === charName))
        const querySnapshot = await getDocs(q);
        try {
          charData = querySnapshot.docs[0].data();
          const charXCoord = charData.coordinates[0];
          const charYCoord = charData.coordinates[1];
          console.log(charData)
          if (isFound(charXCoord,charYCoord,targetXPercent,targetYPercent)) {
            // Set the target characters state dic to true
            console.log(`${charName} found`)
            // Index of the characters dictionary in the state
            const new_dic_index = characters.indexOf(char_dic);
            console.log(new_dic_index)
            //set the character´s dictionary to found and replace the character´s dic inside state
            char_dic.found = true;
            characters_copy[new_dic_index] = char_dic;
            setCharacters(characters_copy)
            if (isAllFound()) {
              setisGameOver(true)
            }
          } else {
            console.log("No character there")
          }

        } catch(e) {
          console.log(`Error: ${e}`)
        }
    }
  

  

  return(
    <div className="flex flex-col">
      <div className="basis-1/4">
        <Navbar time = {time} isGameOver = {isGameOver}/>
      </div>

      <div className="basis-1/4">
        <Characters character_list={characters} />
      </div>

      <div className="basis-full">
        <div className="relative">
          <GameImage setx={setx} sety = {sety} setclicked = {setclicked} clicked = {clicked} settargetXPercent = {settargetXPercent} settargetYPercent = {settargetYPercent}/>
          {clicked === true && <TargetBox x = {x} y = {y} setx = {setx} sety = {sety} characters = {characters} setclicked = {setclicked} clicked = {clicked} targetXPercent = {targetXPercent} targetYPercent = {targetYPercent} isCharFound = {isCharFound}/>}
          {isGameOver && <HighscoreModal time = {time} restartGame = {restartGame} setusername = {setusername} username = {username}/>}
          </div>
        </div>
      </div>
  )
}

export default WheresWaldo