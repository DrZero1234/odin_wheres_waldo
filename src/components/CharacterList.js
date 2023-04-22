import {toast} from "react-toastify"
import { firestore } from "./utils/firebase";
import { query,collection,where,getDocs } from "firebase/firestore";

export default  function CharacterList({characters, targetXPercent,targetYPercent,setisGameOver,setCharacters}) {


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
            toast.success(`${charData.name} found`)
            char_dic.found = true;
            characters_copy[new_dic_index] = char_dic;
            setCharacters(characters_copy);
            if (isAllFound()) {
              setisGameOver(true)
            }
          } else {
            toast.warn("No character there")
          }

        } catch(e) {
          console.log(`Error: ${e}`)
        }
    }

  return(
  <ul className="flex flex-col divide-y w-full">
      {characters.map(character => (
    <li className={`flex flex-row ${character.found && "pointer-events-none"}`} onClick={(e) => isCharFound(e,targetXPercent,targetYPercent,character.name)} >
      <button type="button" className="select-none cursor-pointer hover:bg-gray-100 hover:text-slate-900 dark:hover:bg-gray-600 dark:hover:text-white bg-slate-900 text-slate-200 flex flex-1 items-center p-4 block disabled:bg-slate-600 disabled:opacity-90" disabled = {character.found} >
        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
            <img alt="character pic" src={character.img_src} className="mx-auto object-cover h-10 w-10" />
        </div>
        <div className="flex-1 pl-1">
          <div className="font-medium dark:text-white">{character.name}</div>
        </div>
      </button>
    </li>
      ))}
</ul>
    )
}

 