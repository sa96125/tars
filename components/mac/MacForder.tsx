"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useToast } from "../ui/use-toast";

function MacFolder() {
  const { toast } = useToast();
  const [clicked, setClicked] = useState(false);
  const folderRef = useRef<HTMLDivElement>(null);

  // 클릭 이벤트를 문서 전체에서 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        folderRef.current &&
        !folderRef.current.contains(event.target as Node)
      ) {
        setClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setClicked(true);
  };

  const handleDoubleClick = () => {
    toast({
      title: "🤖 Tars Security Activated.",
      description: (
        <>
          종승님의 은밀한 공간에 접근을 시도하셨군요.
          <br />
          안에 뭐가 있는지 저도 몰라요... 😳
        </>
      ),
      duration: 5000, // 표시 시간 설정 (5초)
      style: {
        backgroundColor: "#333", // 다크 모드 배경색
        color: "#fff", // 텍스트 색상
        border: "1px solid #444", // 테두리 색상
      },
    });
  };

  return (
    <div
      ref={folderRef}
      className={`absolute right-0 p-2 text-center cursor-pointer flex flex-col gap-1`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div
        className={`relative flex items-center justify-center ${
          clicked ? "bg-black/30 rounded-sm backdrop-blur-xl" : ""
        }`}
      >
        <Image
          priority
          src="/folder.png"
          alt="직박구리"
          width={50}
          height={50}
          className={`object-cover`}
        />
      </div>
      <p
        className={`${
          clicked ? "bg-blue-700 rounded-sm" : "bg-transparent"
        } text-xs font-semibold text-white`}
      >
        직박구리
      </p>
    </div>
  );
}

export default MacFolder;
