import React from "react";
import Image from "next/image";
import Dock from "@/components/mac/Dock";
import MacMenuBar from "@/components/mac/MacMenuBar";
import MacBrowser from "@/components/mac/Safari";
import MacFolder from "@/components/mac/MacForder";

function HomePage() {
  return (
    <div className="relative h-screen w-full">
      {/* 상단 공통 메뉴바 */}
      <MacMenuBar />

      {/* 월페이퍼 */}
      <Image
        src="/bigsur_wallpaper.jpg"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
        alt="tars os wallpaper"
        className="object-cover -z-10"
      />

      {/* 컨텐츠 */}
      <div
        className="relative w-full pt-[33px]"
        style={{ height: "calc(100vh - 95px)" }}
      >
        <MacFolder />

        <MacBrowser
          src="/경력기술서.pdf"
          title="경력기술서"
          width="80%"
          height="90%"
        />
      </div>

      {/* 하단 공통 Dock */}
      <Dock />
    </div>
  );
}

export default HomePage;
