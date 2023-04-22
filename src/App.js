import { useState } from "react";
import WheresWaldo from "./components/Game"
import "react-toastify/dist/ReactToastify.css";

export default function App() {
   const [x, setx] = useState(0);
   const [y, sety] = useState(0);


  return(
    <WheresWaldo x={x} y={y} sety = {sety} setx = {setx}/>
  )
}