import Navbar from "./Navbar";
import Lisa from "../img/lisa.webp"
import Hornet from "../img/hornet.jpeg"
import Sans from "../img/sans.png"
import Characters from "./Characters";
import GameImage from "./GameImage";
import TargetBox from "./TargetBox"
import { findAllScores } from "./utils/scores";

import HighscoreModal from "./HighscoreModal";
import HighscoreTable from "./HighscoreTable"
import { useEffect, useState } from "react";
import { firestore } from "./utils/firebase";
import { query, collection, addDoc, getDocs,getDoc,where, QuerySnapshot, orderBy, limit } from "firebase/firestore";



function WheresWaldo({x,y,setx,sety}) {
  const [characters, setCharacters] = useState([{name: "Lisa", img_src: Lisa, found: false},{name: "Hornet", img_src: Hornet, found: false}, {name: "Sans", img_src: Sans, found: false}])
  const [clicked, setclicked] = useState(false);
  const [firstClick, setfirstClick] = useState(false);
  const [isGameOver, setisGameOver] = useState(false);
  const [targetXPercent, settargetXPercent] = useState(0);
  const [targetYPercent,settargetYPercent] = useState(0);
  const [time,setTime] = useState(0);
  const [isSubmitted, setisSubmitted] = useState(false);
  const [username,setusername] = useState("");


  /*
  const getCharacterData = async() => {
    let charData
    const q = query(collection(firestore,"characters"), where("name", "==" ,"Hornet"));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
      charData = querySnapshot.docs[0].data()
      console.log(`Name: ${charData.name}`)
      console.log(`X: ${charData.coordinates[0]}`)
      console.log(`Y: ${charData.coordinates[1]}`)
    }
  }
  */

  useEffect(() => {

    // The counting of the timer
    let intervalId;
    if (!isGameOver) {
      intervalId = setInterval(() => setTime(time + 1), 1000);
    }
    return () => clearInterval(intervalId)
  }, [isGameOver, time])



    function restartGame(e)  {
      e.preventDefault()
      setCharacters([{name: "Lisa", img_src: Lisa, found: false},{name: "Hornet", img_src: Hornet, found: false}, {name: "Sans", img_src: Sans, found: false}]);
      setclicked(false);
      setTime(0);
      setfirstClick(false);
      setisGameOver(false);
      settargetXPercent(0);
      settargetYPercent(0);
      setusername("")
      setisSubmitted(false);
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
          {clicked === true && <TargetBox x = {x} y = {y} setx = {setx} sety = {sety} characters = {characters} setCharacters = {setCharacters} setclicked = {setclicked} clicked = {clicked} targetXPercent = {targetXPercent} targetYPercent = {targetYPercent} setisGameOver={setisGameOver}/>}
          {isGameOver && <HighscoreModal time = {time} restartGame = {restartGame} setusername = {setusername} username = {username} setisSubmitted = {setisSubmitted} setisGameOver = {setisGameOver}/>}
          {/* {isSubmitted && <HighscoreTable restartGame={restartGame}/>} */}
          {isSubmitted && <HighscoreTable restartGame = {restartGame}/>} 
          </div>
        </div>
      </div>
  )
}

export default WheresWaldo