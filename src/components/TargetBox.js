


export const TargetBox = ({x,y}) => {
    return(
        <div style={{width: "50px",height: "50px", position: "absolute", top: y-25+"px", left: x-25+"px", outline: "2px solid red",zIndex: "1"}}></div>
    )
}