"use client";

import { useEffect, useState } from "react";

function useCurrentTime() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      setCurrentTime(formattedTime.replace(/,/g, ""));
    };

    updateTime();

    const intervalId = setInterval(updateTime, 60000); // 1분마다 업데이트

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 제거
  }, []);

  return currentTime;
}

export default useCurrentTime;
