import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {

  return( 
    <div className="w-full h-full flex flex-col background items-center">
      <h1 className="bg-white w-11/12 mx-auto px-10 py-2 rounded-lg text-center mt-[40px] text-2xl font-bold">Random Gifs</h1>
      <div className="flex flex-col items-center w-full gap-y-10 mt-[30px]">
        <Random></Random>
        <Tag/>
      </div>
    </div>
  );
}
export default App;


