import React from 'react'
import { Spinner } from './Spinner';
import useGif from '../hooks/useGif';
const Random = () => {
  const {gif,loading,clickHandler} = useGif();
  return (
    <div className='w-1/2 bg-green-500 flex items-center flex-col rounded-lg border border-black gap-y-5'>
      <h1 className=' mt-[15px] text-3xl underline uppercase font-bold'> A RANDOM GIF </h1>
      {
        loading ? <Spinner></Spinner> : <img src={gif} width={450}></img>
      }
      <button onClick={clickHandler} className='w-10/12 rounded-lg text-lg py-2 bg-white mb-[20px]'>Generate Gif</button>
        
    </div>
  )
}

export default Random;