import Example from "../img/example.png"
import { useEffect, useState, useLayoutEffect, useRef } from "react";

export default function GameImage({sety,setx, setclicked, clicked}) {

  const xPercentDoc = document.getElementById("xpercent");
  const yPercentDoc = document.getElementById("ypercent")

  const imageRef = useRef();
  const [width, setwidth] = useState(0);
  const [height, setheight] = useState(0);

  const [targetXPercent, settargetXPercent] = useState(0);
  const [targetYPercent,settargetYPercent] = useState(0);


  useEffect(() => {
    if (imageRef.current) {
      setheight(imageRef.current.offsetHeight);
      setwidth(imageRef.current.offsetWidth);
    }
  })





  /*
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize)
    handleWindowResize();

    return() => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])

  */

  const handleMouseClicked = (event) => {
    const bounds = event.target.getBoundingClientRect();
    let xPercent;
    let yPercent;
    console.log("lel")

    const imgX = Math.round(event.clientX - bounds.left);
    const imgY = Math.round(event.clientY - bounds.top);

    if (!clicked) {
      setx(imgX);
      sety(imgY);
    }

    console.log(`x: ${imgX}`);
    console.log(`y: ${imgY}`)

    setclicked(!clicked)

    xPercent = Math.round((imgX / width) * 100)
    yPercent = Math.round((imgY / height) * 100)

    settargetXPercent(xPercent);
    settargetYPercent(yPercent);

    console.log(width);
    console.log(height)

    console.log(xPercent);
    console.log("y(infinity): " + yPercent)
    
  }

  return(
    <div ref = {imageRef}>
      <p id="xpercent">X: {targetXPercent}</p>
      <p id="ypercent">Y: {targetYPercent}</p>
      <img class="z-0 object-cover h-100 w-100" src={Example} onClick = {handleMouseClicked} />
    </div>
  )
}