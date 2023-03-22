import { useState } from "react";
import WheresWaldo from "./components/Game"
import { useRef } from "react";
import handleSubmit from "./components/handleSubmit";

// The Project

/* About the App

A Wheres Waldo Project built with HTML, CSS, JS-React,Firebase.
After the first click a timer should start which will be used for the 
final score.
Clicking on the picture should place a marker with a list of characters.
If The selected character is on the marker´s spot the  program should
set that character as found.
The character coordinates data will be stored on the Firebase backend,
along with the user scoreboard.
If the user finds all the characters a popup window should appear where
the user type their custom name, this name will be user on the scoreboard.

*/

/* MUST HAVES

- Image which on click will have a makrer on it
- Character coordinates
- Highscore Timer
- Site styling

*/

/* NICE TO HAVES

- Randomizing the target character OR multiple levels.

*/


















export default function App() {
   const [x, setx] = useState(0);
   const [y, sety] = useState(0);

  return(
    <WheresWaldo x={x} y={y} sety = {sety} setx = {setx}/>
  )
}