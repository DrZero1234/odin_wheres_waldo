import test from "../img/test.jpg"
import { CharacterList } from "./CharacterList"
import { useEffect, useState } from "react";
import { TargetBox } from "./TargetBox";








export const Board = () => {
    const [imageMousePos, setimageMousePos] = useState({});

    const handleMouseMove = (event) => {

        const imageX = event.clientX - event.target.offsetLeft
        const imageY = event.clientY - event.target.offsetTop;

        console.log({x: imageX, y: imageY})

        setimageMousePos({x: imageX, y: imageY})
        return(<TargetBox x = {imageX} y={imageY} />)
    }

    useEffect(() => {
        const handleMouseMove = (event) => {
            setimageMousePos({
                x: event.clientX - event.target.offsetLeft,
                y: event.clientY - event.target.offsetTop,
            })
        }
    })
    return(
            <img src={test} onClick = {handleMouseMove} id="task-img"/>
    )
}