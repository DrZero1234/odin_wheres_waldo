
import CharacterList from "./CharacterList";
import { query,collection,where,getDocs } from "firebase/firestore";
import { firestore } from "./utils/firebase";


export default function TargetBox({x,y,setx,sety,characters,setCharacters,clicked,targetXPercent,targetYPercent,setisGameOver}) {

  function isFound(charXCoord,charYCoord,targetXPercent,targetYPercent) {
      const minX = charXCoord - 3;
      const maxX = charXCoord + 3;
      const minY = charYCoord - 3;
      const maxY = charYCoord + 3;

      return((targetXPercent >= minX && targetXPercent <= maxX) && (targetYPercent >= minY && targetYPercent <= maxY));
    }

  function isAllFound() {
      return characters.every((character => character.found === true));
  }

    async function isCharFound(e,targetXPercent,targetYPercent,charName) {
        e.preventDefault();
        let charData;
        let characters_copy = [...characters]
        const q = query(collection(firestore,"characters"), where("name", "==" ,charName));
        // The dictionary according to charName
        const char_dic = characters.find((dic => dic.name === charName))
        const querySnapshot = await getDocs(q);
        try {
          charData = querySnapshot.docs[0].data();
          const charXCoord = charData.coordinates[0];
          const charYCoord = charData.coordinates[1];


          if (isFound(charXCoord,charYCoord,targetXPercent,targetYPercent)) {
            // Set the target characters state dic to true
            // Index of the characters dictionary in the state
            const new_dic_index = characters.indexOf(char_dic);
            //set the character´s dictionary to found and replace the character´s dic inside state
            char_dic.found = true;
            characters_copy[new_dic_index] = char_dic;
            setCharacters(characters_copy)
            if (isAllFound()) {
              setisGameOver(true)
            }
          } else {
            console.log("No character there")
            console.log(`Y: ${targetYPercent}`);
            console.log(`X: ${targetXPercent}`)
          }

        } catch(e) {
          console.log(`Error: ${e}`)
        }
    }

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
    <CharacterList characters = {characters} targetXPercent = {targetXPercent} targetYPercent = {targetYPercent} isCharFound = {isCharFound} />
    
  </div>
  )
}