import React from "react";

interface SliderContentProps {
  img: string,
  location: string
}

function SliderContent({ img, location }: SliderContentProps) {
  return (
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white relative">
      <div className="absolute z-10 right-0 top-0 h-full w-full flex flex-col items-center justify-center py-2 px-16">
        <h1 className="text-white text-3xl sm:text-4xl font-blod mb-8 text-center">
          Arabia: Beyond the Desert
        </h1>
        <p className="text-center text-white text-sm sm:text-base font-light mb-4">
          Embark on a journey to explore the vibrant tapestry of the Arab world,
          where each step unveils treasures beyond the desert sands
        </p>
        <button className="bg-primary text-white font-bold text-base sm:text-xl rounded-[100px] px-4 py-2">
          Explore now
        </button>
      </div>
      <div className="hidden sm:absolute">
        
      <p className="text-white">
        {location}
      </p>
      </div>
      <figure className="top-0 right-0 w-full h-full">
        <div className="bg-black w-full h-full opacity-20 absolute top-0 left-0"></div>
        <img className="w-full h-full object-cover" src={img} alt="" />
      </figure>
    </div>
  );
}

export default SliderContent;
