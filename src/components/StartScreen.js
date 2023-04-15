import { Accordion } from "flowbite-react";

export default function StartScreen({setisStarted}) {

    return(
        <div className="h-screen flex justify-center items-center fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full" id="highscore-modal">
    <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white text-center">Wheres Waldo </h3>
                {/* Flowbite accordion */}
                <Accordion alwaysOpen={true}>
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
                <form className="space-y-6 py-4" action="#">
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setisStarted(true)}>Start Game</button>
                </form>
            </div>
        </div>
    </div>
</div> 
    )
}