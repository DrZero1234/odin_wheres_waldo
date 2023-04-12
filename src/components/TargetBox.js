

import CharacterList from "./CharacterList";

export default function TargetBox({x,y,setx,sety,characters,setCharacters,clicked,targetXPercent,targetYPercent,setisGameOver,setshowError}) {




  const handleMouseClicked = (event) => {
    const bounds = event.target.getBoundingClientRect();

    const imgX = event.clientX - bounds.left;
    const imgY = event.clientY - bounds.top;

    setx(imgX);
    sety(imgY);

    
  }

  return(
  <div className="z-10 flex flex-col gap-2  absolute" style  ={{left:x -20 + "px",top: y -20 + "px" }} onClick = {handleMouseClicked}>
    <div className={`h-40px w-52px outline outline-2 outline-red-600`} />
    <CharacterList characters = {characters} targetXPercent = {targetXPercent} targetYPercent = {targetYPercent} setisGameOver={setisGameOver} setCharacters={setCharacters} />
  </div>
  )
}