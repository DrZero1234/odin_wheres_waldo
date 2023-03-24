import Example from "../img/example.png"
import { useEffect, useState, useLayoutEffect, useRef } from "react";

export default function GameImage({sety,setx, setclicked, clicked}) {

  const ref = useRef(null);

  const [numbers, setNumbers] = useState([]);

  const [width, setwidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setwidth(ref.current.clientWidth);
    setHeight(ref.current.clientHeight)
  }, [numbers])

  useEffect(() => {
    function handleWindowResize() {

      setwidth(ref.current.clientWidth);
      setHeight(ref.current.clientHeight);

      console.log(ref.current.clientWidth);
      console.log(ref.current.clientHeight)
    }

    window.addEventListener("resize", handleWindowResize)

    return() => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])

  const handleMouseClicked = (event) => {
    const bounds = event.target.getBoundingClientRect();
    console.log("lel")

    const imgX = event.clientX - bounds.left;
    const imgY = event.clientY - bounds.top;

    if (!clicked) {
      setx(imgX);
      sety(imgY);
    }

    console.log(`x: ${imgX}`);
    console.log(`y: ${imgY}`)

    setclicked(!clicked)

    console.log(Math.floor((imgX / width) * 100));
    console.log(Math.floor((imgY / height) * 100))
    
  }

  return(
      <img class="z-0 object-cover h-100 w-100" src={Example} onClick = {handleMouseClicked} ref = {ref}/>
  )
}