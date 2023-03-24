export default function Characters({character_list}) {
  return(
    <div className="flex items-center justify-center m-2 space-x-4">
      {character_list.map((character) => (
        <figure class="max-w-md">
          <img class="h-s w-s" src={character.img_src} alt="image description" />
          <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{character.name}</figcaption>
        </figure>
      ))}
    </div>
  )
}