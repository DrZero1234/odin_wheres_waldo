
const style = {
    width: "5%",
    height: "5%",
    border: "2px solid red",
    position: "absolute",
    zIndex: "10"

}

export const TargetBox = ({x,y}) => {
    return(
        <div style={{width: "100px",height: "100px", position: "absolute", top: y-25+"px", left: x-50+"px", outline: "2px solid red", zIndex: 1}}></div>
    )
}