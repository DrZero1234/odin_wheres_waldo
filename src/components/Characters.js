export default function Characters({character_list}) {
  return(
    <div className="flex items-center justify-center items-center m-2 space-x-4">
      {character_list.map((character) => (
        <figure>
          <img className="lg:max-h-32 md:max-h-16 sm:max-h-4" src={character.img_src} alt="image description" />
          <figcaption className="mt-2  text-center text-gray-800 text-lg sm:text-sm dark:text-gray-400">{character.name}</figcaption>
        </figure>
      ))}
    </div>
  )
}