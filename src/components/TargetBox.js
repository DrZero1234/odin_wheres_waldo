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
  <div className="z-10 flex flex-row gap-2  absolute" style  ={{left:x -20 + "px",top: y -20 + "px" }}>
    <div className={`h-40px w-52px outline outline-2 outline-red-600`} onClick = {handleMouseClicked}/>
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
    </div>
  )
}