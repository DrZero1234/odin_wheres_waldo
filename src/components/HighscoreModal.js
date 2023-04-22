import { addDoc, collection, doc, setDoc, getDoc, writeBatch } from "firebase/firestore";
import { firestore } from "./utils/firebase";
import HighscoreTable from "./HighscoreTable";
import { debounce } from "debounce";
import { useState } from "react";

export default function HighscoreModal({time,restartGame,setusername,username,setisSubmitted,setisGameOver}) {

  const [usernameAvailable,setusernameAvailable] = useState(false);

  const handleChange = debounce (async (e) => {
    const textUsername = e.target.value;
    setusername((textUsername));
    if (username.length >= 3 || username.length <= 20) {
      const ref = doc(firestore,"unique_usernames", username)
      const docSnap = await getDoc(ref);
      console.log(ref)
      const exists = docSnap.exists();
      console.log(exists)
      setusernameAvailable(!exists)
    } else {
      setusernameAvailable(false)
    }
  }, 300)


  // Adds the score document and one separate document for the username to prevent using the same username
  const handleSubmit = async (e,username,score) =>  {
    e.preventDefault();
    // Creating document refs
    const highscore_ref = doc(collection(firestore,"highscore"));
    // Custom ID: the submitted username in lowercase
    const username_ref = doc(firestore,"unique_usernames",username.toLowerCase())

    const batch = writeBatch(firestore);
    batch.set(highscore_ref, {username,score:time}) 
    batch.set(username_ref, {uid: highscore_ref.id});

    await batch.commit();
    setisGameOver(false)
    setisSubmitted(true);
  }

  const timeString = new Date(time * 1000).toISOString().slice(14,19);
  return(
    <div className="h-screen flex justify-center items-center fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full" id="highscore-modal">
    <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" onClick={e => restartGame(e)} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" ></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white text-center">Your Time is </h3>
                <h2 className="mb-4 text-xl font-medium text-gray-900 dark:text-white text-center">{timeString} </h2>
                <form className="space-y-6" action="#">
                    <div>
                        <label htmlFor="highscore-username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input type="text" name="highscore_username" id="highscore-username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username" required onChange={handleChange}/>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:pointer-events-none" disabled={usernameAvailable}  onClick={(e) => handleSubmit(e,username,time)}>Submit</button>
                </form>
            </div>
        </div>
    </div>
</div> 
  )
}