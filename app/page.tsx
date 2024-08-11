import Image from "next/image";
import React from "react";

function HomePage() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/bigsur_wallpaper.jpg"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
        alt=""
        className="object-cover z-10"
      />
      <h1 className="text-white text-4xl">HomePage</h1>
    </div>
  );
}

export default HomePage;
