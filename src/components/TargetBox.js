import { useRef } from "react"



export default function TargetBox({x,y,setx,sety,characters,setclicked, clicked}) {
  const style = {
    ulStyle: `w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white`,
    liStyle: `w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white z-10`,
  }

  const handleMouseClicked = (event) => {
    const bounds = event.target.getBoundingClientRect();
    console.log("lel")

    const imgX = event.clientX - bounds.left;
    const imgY = event.clientY - bounds.top;

    console.log(clicked)
    setx(imgX);
    sety(imgY);
    setclicked(!clicked)

    
  }

  const imageRef = useRef();

  return(
  <div className="z-10 flex flex-row gap-2  absolute" style  ={{left: x - 24 + "px",top: y - 24 + "px" }}>
    <div className={`h-12 w-12 border-solid border-2 border-red-600`} onClick = {handleMouseClicked}/>
    <ul className="py-2 overflow-y-auto text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUsersButton">
      {characters.map(character => (
        <li>
          <button href="#" class="flex items-center px-4 py-2 bg-slate-900 text-slate-200 hover:bg-gray-100 hover:text-slate-900 dark:hover:bg-gray-600 dark:hover:text-white">
          <img class="w-6 h-6 mr-2 full" src={character.img_src} alt="Jese image" ref={imageRef}/>
          {character.name}
          </button>
        </li>
      ))}
      </ul>
    </div>
  )
}