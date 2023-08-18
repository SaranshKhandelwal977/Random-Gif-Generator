import React, { useState, useEffect } from 'react'
import { Spinner } from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
  const[tag, setTag] = useState("car");
  const {gif,loading,clickHandler} = useGif(tag);
  function changeHandler(event){
    setTag(event.target.value);
  }

  return (
    <div className='w-1/2 bg-blue-500 flex items-center flex-col rounded-lg border border-black gap-y-5 mb-10'>
      <h1 className=' mt-[15px] text-3xl underline uppercase font-bold'> A RANDOM GIF </h1>
      {
        loading ? <Spinner></Spinner> : <img src={gif}></img>
      }
      <input className='w-10/12 bg-white text-center rounded-lg text-lg py-2' type='text' name='tag' onChange={changeHandler} value={tag}></input>
      <button className='w-10/12 bg-white rounded-lg text-lg py-2 mb-[20px]' onClick={() => clickHandler(tag)}>Generate Gif</button>
        
    </div>
  )
}

export default Tag;