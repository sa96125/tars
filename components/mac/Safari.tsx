import React from "react";

const MacBrowser = ({
  src,
  title = "New Tab",
  width = "800px",
  height = "600px",
}: any) => {
  return (
    <div
      className="relative border border-gray-300 rounded-lg overflow-hidden shadow-md"
      style={{ width, height: `calc(${height} + 30px)` }} // Adjust height to include title bar
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between bg-gray-300 p-1.5 h-[30px] border-b border-gray-300">
        {/* Control Buttons */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full cursor-pointer"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></div>
        </div>
        {/* Title */}
        <div className="flex-1 text-center font-bold text-gray-800 text-sm">
          {title}
        </div>
        <div className="w-10"></div> {/* Placeholder to balance title */}
      </div>

      {/* Address Bar */}
      <div className="bg-gray-100 p-2 border-b border-gray-300">
        <input
          type="text"
          value={"https://jongseung.link"}
          readOnly
          className="w-full p-1.5 rounded-md border border-gray-300 text-xs"
        />
      </div>

      {/* iFrame */}
      <iframe src={src} className="w-full h-full border-none" title={title} />
    </div>
  );
};

export default MacBrowser;
