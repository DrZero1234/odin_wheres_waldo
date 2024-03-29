


import Navbar from "./Navbar";
import Characters from "./Characters";
import GameImage from "./GameImage";
import TargetBox from "./TargetBox"
import HighscoreModal from "./HighscoreModal";
import HighscoreTable from "./HighscoreTable";
import StartScreen from "./StartScreen";
import Information from "./Information";

import { useEffect, useState } from "react";
import { ToastContainer} from "react-toastify";
import { Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Lisa from "../img/lisa.webp"
import Hornet from "../img/hornet.jpeg"
import Sans from "../img/sans.png"
import Limbo from "../img/limbo.png"
import Slugcat from "../img/slugcat.png"
import Shovel_knight from "../img/shovel_knight.png"
import Omega_flowey from "../img/omega_flowey.png"
import Super_meat_boy from "../img/super_meat_boy.png"


function WheresWaldo({x,y,setx,sety}) {
  const CHARACTER_POOL = [{name: "Lisa", img_src: Lisa, found: false},
  {name: "Hornet", img_src: Hornet, found: false},
  {name: "Sans", img_src: Sans, found: false},
  {name: "Limbo", img_src: Limbo, found: false},
  {name: "Slugcat", img_src: Slugcat, found: false},
  {name: "Shovel Knight", img_src: Shovel_knight, found: false},
  {name: "Omega Flowey", img_src: Omega_flowey, found: false},
  {name: "Meatboy", img_src: Super_meat_boy, found: false},]

  const [characters, setCharacters] = useState([])
  const [clicked, setclicked] = useState(false);
  const [isStarted, setisStarted] = useState(false)
  const [isGameOver, setisGameOver] = useState(false);
  const [targetXPercent, settargetXPercent] = useState(0);
  const [targetYPercent,settargetYPercent] = useState(0);
  const [time,setTime] = useState(0);
  const [isSubmitted, setisSubmitted] = useState(false);
  const [username,setusername] = useState("");
  const [showError, setshowError] = useState(false);
  const[showInformation,setshowInformation] = useState(false);

  const randomize_chars = () => {
    const random_arr = [];
    while (random_arr.length < 3) {
      let random_item = CHARACTER_POOL[Math.floor(Math.random() * CHARACTER_POOL.length)]
      if (!random_arr.some(e => e.name === random_item.name)) {
        random_arr.push(random_item)
      }
    }
    setCharacters(random_arr)
  }

  useEffect(() => {
    if (isStarted) {
      randomize_chars()
    }
  }, [isStarted])


  useEffect(() => {

    // The counting of the timer
    let intervalId;
    if (!isGameOver && isStarted && !showInformation) {
      intervalId = setInterval(() => setTime(time + 1), 1000);
    }
    return () => clearInterval(intervalId)
  }, [isGameOver,isStarted,showInformation,time])





    function restartGame(e)  {
      e.preventDefault()
      randomize_chars();
      setclicked(false);
      setTime(0);
      setisGameOver(false);
      settargetXPercent(0);
      settargetYPercent(0);
      setusername("")
      setisSubmitted(false);
      setisStarted(false)
    }

    
  return(
    <div className="flex flex-col">

      {!isStarted && <StartScreen setisStarted = {setisStarted} />}
      {(showInformation && isStarted) && <Information setshowInformation = {setshowInformation} showInformation={showInformation}/>}
      {isStarted && 
      <>

      <div className="basis-1/4">
              <ToastContainer position="top-center" autoClose={3000} transition={Slide} hideProgressBar={true}/>
        <Navbar time = {time} isGameOver = {isGameOver} showInformation = {showInformation} setshowInformation = {setshowInformation}/>
      </div>

      <div className="basis-1/4">
        <Characters character_list={characters} />
      </div>

      <div className="basis-full">
        <div className="relative">
          <GameImage setx={setx} sety = {sety} setclicked = {setclicked} clicked = {clicked} settargetXPercent = {settargetXPercent} settargetYPercent = {settargetYPercent}/>
          {clicked === true && <TargetBox x = {x} y = {y} setx = {setx} sety = {sety} characters = {characters} setCharacters = {setCharacters} setclicked = {setclicked} targetXPercent = {targetXPercent} targetYPercent = {targetYPercent} setisGameOver={setisGameOver} setshowError = {setshowError}/>}
          {isGameOver && <HighscoreModal time = {time} restartGame = {restartGame} setusername = {setusername} username = {username} setisSubmitted = {setisSubmitted} setisGameOver = {setisGameOver}/>}
          {/* {isSubmitted && <HighscoreTable restartGame={restartGame}/>} */}
          {isSubmitted   && <HighscoreTable restartGame = {restartGame}/>} 
          </div>
        </div>

        </>}
      </div>
  )
}

export default WheresWaldo