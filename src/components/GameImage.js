import Example from "../img/example.png"
import { useEffect, useState, useRef } from "react";
export default function GameImage({sety,setx, setclicked, clicked,settargetXPercent, settargetYPercent}) {

  const imageRef = useRef();
  const [width, setwidth] = useState(0);
  const [height, setheight] = useState(0);






  useEffect(() => {
    if (imageRef.current) {
      setheight(imageRef.current.offsetHeight);
      setwidth(imageRef.current.offsetWidth);


    }
  })

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])


  function handleWindowResize() {
      setheight(Math.round(imageRef.current.getBoundingClientRect().height));
      setwidth(Math.round(imageRef.current.getBoundingClientRect().width));
    }


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

    const imgX = Math.round(event.clientX - bounds.left);
    const imgY = Math.round(event.clientY - bounds.top);

    if (!clicked) {
      setx(imgX);
      sety(imgY);
    }

    setclicked(!clicked)

    xPercent = Math.round((imgX / width) * 100)
    yPercent = Math.round((imgY / height) * 100)
    settargetXPercent(xPercent);
    settargetYPercent(yPercent);

    
  }

  return(
    <div ref = {imageRef}>
      <img className="z-0 object-cover h-100 w-100" src={Example} onClick = {handleMouseClicked} />
    </div>
  )
}