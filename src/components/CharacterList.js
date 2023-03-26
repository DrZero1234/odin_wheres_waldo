export default  function CharacterList({characters}) {
    return(
  <ul class="flex flex-col divide-y w-full">
      {characters.map(character => (
    <li class="flex flex-row">
      <div class="select-none cursor-pointer hover:bg-gray-100 hover:text-slate-900 dark:hover:bg-gray-600 dark:hover:text-white bg-slate-900 text-slate-200 flex flex-1 items-center p-4 block">
        <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
            <img alt="profil" src={character.img_src} class="mx-auto object-cover h-10 w-10" />
        </div>
        <div class="flex-1 pl-1">
          <div class="font-medium dark:text-white">{character.name}</div>
        </div>
      </div>
    </li>
      ))}
</ul>
    )
}

