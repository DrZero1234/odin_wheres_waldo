import test from "../img/test.jpg"
import { CharacterList } from "./CharacterList"
import { useEffect, useState } from "react";
import { TargetBox } from "./TargetBox";
import { useRef } from "react";
import testImage from "../img/test.jpg"




export const Board = () => {
    const imageRef = useRef();

    let test_X;
    let test_Y;

    const [imageMousePos, setimageMousePos] = useState({});
    const [imageClicked, setimageClicked] = useState(false);

    const handleMouseMove = (event) => {
        var bounds = event.target.getBoundingClientRect();
        const {clientX,clientY} = event

        test_Y = document.getElementById("test-Y")
        test_X = document.getElementById("test-X");

        const imageX = clientX - bounds.left;
        const imageY = clientY - bounds.top;


        
        if (imageClicked === false) {
            console.log(imageMousePos.x);
            console.log(imageMousePos.y)
            test_X.textContent = imageMousePos.x;
            test_Y.textContent = imageMousePos.y
            setimageMousePos({x: imageX, y: imageY})
        }
        
    }

    const handleMouseClick = (event) => {
        var bounds = event.target.getBoundingClientRect();
        const {clientX,clientY} = event

        event.preventDefault();

        console.log(imageMousePos.x);
        console.log(imageMousePos.y);
        setimageClicked(!imageClicked)
        if (imageClicked) {
            setimageMousePos({x: clientX - bounds.left,y: clientY - bounds.top})
        }

    }

    if (!imageClicked) {
        return(
                <div className="img-wrapper" ref = {imageRef} onMouseMove = {handleMouseMove} onClick = {handleMouseClick} >
                    <h2 id="test-X" style={{position: "sticky", color: "red",top: "20px"}}>X: {imageMousePos.x}</h2>
                    <h2 id="test-Y" style={{position: "sticky", color: "red",top: "50px"}}>Y: {imageMousePos.y}</h2>
                    <img src={testImage}  ></img>
                </div>       
        )
    } else {
        return(
            <div className="img-wrapper"  onMouseMove = {handleMouseMove} onClick = {handleMouseClick}  ref = {imageRef}>
                    <h2 id="test-X" style={{position: "sticky", color: "red",top: "20px"}}>X: {imageMousePos.x}</h2>
                    <h2 id="test-Y" style={{position: "sticky", color: "red",top: "50px"}}>Y: {imageMousePos.y}</h2>
                <img src={testImage}  ></img>
                <TargetBox x={imageMousePos.x} y={imageMousePos.y} />
            </div>
        )
    }
}