import { Accordion } from "flowbite-react";

export default function Information({setshowInformation,showInformation}) {

    return(
        <div className="h-screen z-10 flex justify-center items-center fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full" id="highscore-modal">
    <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal" onClick={(e) => setshowInformation(!showInformation)}>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white text-center">Wheres Waldo </h3>
                {/* Flowbite accordion */}
                <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>
                    What is Wheres Waldo?
                    </Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Where's Wally? (called Where's Waldo? in Canada and the USA) is a British series of children's puzzle books created by English illustrator Martin Handford.
                        The books consist of a series of detailed double-page spread illustrations depicting dozens or more people doing a variety of amusing things at a given location.
                        In this case you will have to find 3 indie game character 
                    </p>
                        <a
                        href="https://en.wikipedia.org/wiki/Where%27s_Wally%3F"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                        Wheres Waldos wiki page
                        </a>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                    How to play?
                    </Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        By clicking on the image a small rectangle will appear on the click position. If the selected character is in the rectangle (or very close to it) you found one of them.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">The game´s point system is based on speed meaning that whoever finds the 3 characters the fastest will be on top of the highscore table. The timer starts immediately after you start the game</p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">The 3 characters will be randomized each game that will make your job harder (or maybe easier if you are lucky).</p>
                    
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                    How do I submit my score?
                    </Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        After you finished the game it will prompt you for a "username". The username needs to be unique
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        You dont need to be signed up to submit your score.
                    </p>
                    </Accordion.Content>
                </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    </div>
</div> 
    )
}