import { CharacterList } from "./CharacterList"




export const TargetBox = ({x,y,chars}) => {
    return(
        <div className="target-wrapper" style={{display: "flex",position: "absolute",top: y+50+"px", left: x-25+"px",gap: "1rem"}}>
            <div style={{width: "50px",height: "50px",   outline: "2px solid red",zIndex: "1"}}></div>
            <CharacterList characters={chars} />
        </div>
    )
}