import { Carousel } from "flowbite-react";

interface WallpaperProps {
  images: [any];
  flag: any;
  name: string;
}

function Wallpaper({ images, flag, name }: WallpaperProps) {
  return (
    <Carousel slideInterval={5000} pauseOnHover>
      {images.map((image, i) => (
        <div key={i} className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white relative">
          <div className="absolute z-10 left-0 bottom-0 px-6 py-10 flex items-center">
            <figure className="rounded-full w-20 mr-3">
              <img src={flag} className="rounded-full" alt="" />
            </figure>
            <h1 className="text-white text-4xl">{name}</h1>
          </div>
          <figure className="top-0 right-0 w-full h-full">
            <div className="bg-black w-full h-full opacity-20 absolute top-0 left-0"></div>
            <img
              className="w-full h-full object-cover"
              src={image.path}
              alt=""
            />
          </figure>
        </div>
      ))}
    </Carousel>
  );
}

export default Wallpaper;
