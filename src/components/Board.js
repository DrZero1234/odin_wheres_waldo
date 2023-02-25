import test from "../img/test.jpg"
import { CharacterList } from "./CharacterList"
import { useEffect, useState } from "react";
import { TargetBox } from "./TargetBox";
import { useRef } from "react";
import testImage from "../img/test.jpg"




export const Board = () => {
    const imageRef = useRef();

    const [imageMousePos, setimageMousePos] = useState({});
    const [imageClicked, setimageClicked] = useState(false);

    const handleMouseMove = (event) => {
        const {offsetLeft, offsetTop} = imageRef.current;

        const imageX = event.clientX - offsetLeft;
        const imageY = event.clientY - offsetTop;


        
        if (imageClicked === false) {
            console.log(offsetLeft);
            console.log(offsetTop)
            setimageMousePos({x: imageX, y: imageY})
        }
        
    }

    const handleMouseClick = (event) => {
        const {offsetLeft, offsetTop} = imageRef.current;

        event.preventDefault();

        console.log(imageMousePos.x);
        console.log(imageMousePos.y);
        setimageClicked(!imageClicked)
        if (imageClicked) {
            setimageMousePos({x: event.clientX - offsetLeft,y: event.clientY - offsetTop})
        }

    }

    if (!imageClicked) {
        return(
                <div className="img-wrapper" ref = {imageRef} >
                    <img src={testImage}  onMouseMove = {handleMouseMove} onClick = {handleMouseClick}></img>
                </div>       
        )
    } else {
        return(
            <div className="img-wrapper" ref = {imageRef}  >
                <img src={testImage}  onMouseMove = {handleMouseMove} onClick = {handleMouseClick}></img>
                <TargetBox x={imageMousePos.x} y={imageMousePos.y} />
            </div>
        )
    }
}