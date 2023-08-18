import React, { useEffect, useState } from 'react'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif,setGif] = useState("");
  const [loading, setLoading] = useState(false);
  async function clickHandler(tag){
    setLoading(true);
    try{
      const newUrl = tag ? `${url}&tag=${tag}` : url;
      const res = await fetch(newUrl);
      const data = await res.json();
      const imgSource = data.data.images.downsized_large.url;
      setGif(imgSource);
    }
    catch(error){
      setGif();
    }
    setLoading(false);
  }
  useEffect(() => {
    clickHandler(tag);
  },[])
  return{gif,loading,clickHandler};
}

export default useGif;