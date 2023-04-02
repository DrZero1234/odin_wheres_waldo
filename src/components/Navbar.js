export default function Navbar({time,isGameOver}) {
  const timeString = new Date(time * 1000).toISOString().slice(14,19);

  return(

    <>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Wheres Waldo</span>
          <span className="self-center text-l font-semibold whitespace-nowrap dark:text-white">{timeString}</span>
      </div>
    </nav>
    </>
  )
}