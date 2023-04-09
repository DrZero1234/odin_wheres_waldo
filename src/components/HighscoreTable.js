
import { useState, useEffect } from "react";
import { findAllScores } from "./utils/scores.js";

function  HighscoreTable ({restartGame})  {

  const [loading,setloading] = useState(false);
  const [scores,setscores] = useState([])
  const scores_html = scores.map((score,index) => (
                <>
                <tr className="border-b dark:border-neutral-500" key = {score.id}>
                {scores.length === 0 && <p>empty</p>}
                  <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                  <td className="whitespace-nowrap px-6 py-4">{score.username}</td>
                  <td className="whitespace-nowrap px-6 py-4">{new Date(score.score * 1000).toISOString().slice(14,19)}</td>
                </tr>
                </>
  ))

  const fetchData = async () => {
    setloading(true);

    const res = await findAllScores();

    setscores(res)
    setloading(false);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return(
    <div className="h-screen flex justify-center items-center fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full" id="highscore-modal">
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal" onClick={restartGame}>
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
            {loading && <h1>Loading</h1>}
            {scores_html}
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

export default HighscoreTable

