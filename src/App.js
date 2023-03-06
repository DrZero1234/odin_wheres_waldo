
import { useRef } from 'react';
import { firestore } from './components/utils/firebase';
import handleSubmit from './components/handleSubmit';
import { Navbar } from './components/Navbar';
import React from 'react';
import { Board } from './components/Board';
import { useState } from 'react';
import { CharacterList } from './components/CharacterList.js';
import { TargetBox } from './components/TargetBox';

function App() {
  
  const dataRef = useRef();
  // State templates

  /* character = {
    name: string,
    img_url: url,
    x_cor: int,
    y_cor: int,
  }
  */

  /*
  characters = []
  */

  /* 
  found_characters = []
  */

  const [Characters, setCharacters] = useState(["First Character", "Character2", "Character3"]);

  const submitHandler = (e) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = "";
  }
  return (
    <div className="App">
      <Navbar />
      {/* 
      <form onSubmit={submitHandler}>
        <input type="text" className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' ref={dataRef} />
        <button type='submit' className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>Save</button>
      </form>
      */}
      <Board characters = {Characters}/>


    </div>
  );
}

export default App;
