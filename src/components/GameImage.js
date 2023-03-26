import Example from "../img/example.png"
import { useEffect, useState, useLayoutEffect, useRef } from "react";

export default function GameImage({sety,setx, setclicked, clicked}) {

  const imageRef = useRef();
  const [width, setwidth] = useState(1);
  const [height, setheight] = useState(1);

  let movement_timer = null;

  const RESET_TIMEOUT = 100;

  const test_sizes = () => {
    if (imageRef.current) {
      setheight(Math.round(imageRef.current.getBoundingClientRect().height));
      setwidth(Math.round(imageRef.current.getBoundingClientRect().width));

      console.log(`Width: ${width}`);
      console.log(`Height: ${height}`)
    }
  }





  function handleWindowResize() {
      setheight(Math.round(imageRef.current.getBoundingClientRect().height));
      setwidth(Math.round(imageRef.current.getBoundingClientRect().width));
    }

  useLayoutEffect(() => {
    test_sizes();
  }, []);

  window.addEventListener("resize", () => {
    clearInterval(movement_timer);
    movement_timer = setTimeout(test_sizes, RESET_TIMEOUT)
  });


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

    console.log(width);
    console.log(height)

    console.log(xPercent);
    console.log("y(infinity): " + yPercent)
    
  }

  return(
    <div ref = {imageRef}>
      <img class="z-0 object-cover h-100 w-100" src={Example} onClick = {handleMouseClicked} />
    </div>
  )
}