import { Carousel } from "flowbite-react";

type WallpaperProps = {
  images: { path: string }[];
  flag: string;
  name: string;
};

export function Wallpaper({ images, flag, name }: WallpaperProps) {
  return (
    <Carousel slideInterval={5000} pauseOnHover>
      {images.map((image, i) => (
        <div key={i} className="relative flex h-full items-center justify-center bg-gray-400">
          <div className="absolute bottom-0 left-0 z-10 flex items-center px-6 py-10">
            <figure className="mr-3 w-20 rounded-full">
              <img src={flag} className="rounded-full" alt="" />
            </figure>
            <h1 className="text-4xl text-white">{name}</h1>
          </div>
          <figure className="right-0 top-0 h-full w-full">
            <div className="absolute left-0 top-0 h-full w-full bg-black opacity-20"></div>
            <img className="h-full w-full object-cover" src={image.path} alt="" />
          </figure>
        </div>
      ))}
    </Carousel>
  );
}
