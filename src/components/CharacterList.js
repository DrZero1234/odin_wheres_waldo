export default  function CharacterList({characters, targetXPercent,targetYPercent,isCharFound}) {


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

 