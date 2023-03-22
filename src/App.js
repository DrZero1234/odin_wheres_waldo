import Example from "./img/example.png"
import Lisa from "./img/lisa.webp"

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
        <figure class="max-w-lg">
          <img class="h-xs w-xs rounded-lg" src={Lisa} alt="image description" />
          <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Character Name</figcaption>
        </figure>
      ))}
    </div>
  )
}

function TargetBox({x,y, characters}) {
  const style = {
    ulStyle: `w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white`,
    liStyle: `w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white z-10`,

  }

  return(
  <div className="z-10 flex flex-row gap-2  absolute" style  ={{left: x + "px",top: y + "px" }} >
    <div className={`h-12 w-12 border-solid border-2 border-red-600`} />
    <ul className="py-2 overflow-y-auto text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUsersButton">
      {characters.map(character => (
        <li>
          <button href="#" class="flex items-center px-4 py-2 bg-slate-900 text-slate-200 hover:bg-gray-100 hover:text-slate-900 dark:hover:bg-gray-600 dark:hover:text-white">
          <img class="w-6 h-6 mr-2 full" src={Lisa} alt="Jese image" />
          {character}
          </button>
        </li>
      ))}
      </ul>
    </div>
  )
}

function Image() {

  return(
      <img class="z-0 object-cover h-100 w-100" src={Example} />
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

function HighscoreModal() {
  return(
    <div className="h-screen flex justify-center items-center fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full" id="highscore-modal">
    <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white text-center">Your Time is </h3>
                <h2 className="mb-4 text-xl font-medium text-gray-900 dark:text-white text-center">00:00:00 </h2>
                <form className="space-y-6" action="#">
                    <div>
                        <label htmlFor="highscore-username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input type="text" name="highscore_username" id="highscore-username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username" required />
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div> 
  )
}

function HighscoreTable ()  {
  return(
    <div className="h-screen flex justify-center items-center fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full" id="highscore-modal">
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>

            <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4">Pos</th>
              <th scope="col" class="px-6 py-4">Username</th>
              <th scope="col" class="px-6 py-4">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td class="whitespace-nowrap px-6 py-4">Mark</td>
              <td class="whitespace-nowrap px-6 py-4">00:00:05</td>
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td class="whitespace-nowrap px-6 py-4">Jacob</td>
              <td class="whitespace-nowrap px-6 py-4">00:00:12</td>
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td class="whitespace-nowrap px-6 py-4">Larry</td>
              <td class="whitespace-nowrap px-6 py-4">00:00:16</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  )
}


function WheresWaldo() {
  const characters = ["character1", "character2", "character3"]
  const clicked = true;
  const x = 25;
  const y = 25;

  return(
    <div className="flex flex-col">
      <div className="basis-1/4">
        <Navbar />
      </div>

      <div className="basis-1/4">
        <Characters character_list={characters} />
      </div>

      <div className="basis-full">
        <div className="relative">
          <Image />
          {clicked === true && <TargetBox x = {x} y = {y} characters={characters} />}
        </div>
      </div>
    </div>
  )
}


export default function App() {
  return(
    <WheresWaldo />
  )
}