import Example from "./img/example.png"

// The Project

/* About the App

A Wheres Waldo Project built with HTML, CSS, JS-React,Firebase.
After the first click a timer should start which will be used for the 
final score.
Clicking on the picture should place a marker with a list of characters.
If The selected character is on the marker´s spot the  program should
set that character as found.
The character coordinates data will be stored on the Firebase backend,
along with the user scoreboard.
If the user finds all the characters a popup window should appear where
the user type their custom name, this name will be user on the scoreboard.

*/

/* MUST HAVES

- Image which on click will have a makrer on it
- Character coordinates
- Highscore Timer
- Site styling

*/

/* NICE TO HAVES

- Randomizing the target character OR multiple levels.

*/

function Characters({character_list}) {
  return(
    <div className="flex items-center justify-center m-2 space-x-4">
      {character_list.map((character) => (
        <div>{character}</div>
      ))}
    </div>
  )
}

function Image() {
  return(
  <div class="bg-indigo-300 ...">
    <img class="object-fill h-100 w-100" src={Example} />
  </div>
  )
}

function Navbar() {
  return(
    <>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Wheres Waldo</span>
          <span className="self-center text-l font-semibold whitespace-nowrap dark:text-white">00:00:00</span>
      </div>
    </nav>
    </>
  )
}

function WheresWaldo() {
  const characters = ["character1", "character2", "character3"]

  return(
    <div className="flex-col">
      <div className="basis - 1/4">
        <Navbar />
      </div>

      <div className="basis-1/4">
        <Characters character_list={characters} />
      </div>

      <div className="basis-1/2">
        <Image />
      </div>
    </div>
  )
}

export default function App() {
  return(
    <WheresWaldo />
  )
}