import test from "../img/test.jpg"
import { CharacterList } from "./CharacterList"
import { useEffect, useState } from "react";






const style = {
    width: "2000px",
    height: "2000px",
    position: "absolute",
    overflow: "scroll"
}

export const Board = () => {
    const [imageMousePos, setimageMousePos] = useState({});

    const handleMouseMove = (event) => {
        const imageX = event.clientX - event.target.offsetLeft;
        const imagey = event.clientY - event.target.offsetTop;

        console.log({x: imageX, y: imagey})

        setimageMousePos({x: imageX, y: imagey})
    }

    useEffect(() => {
        const handleMouseMove = (event) => {
            setimageMousePos({
                x: event.clientX,
                y: event.clientY,
            })
        }
    })
    return(
        <img src={test} style = {style} onClick = {handleMouseMove} />
    )
}