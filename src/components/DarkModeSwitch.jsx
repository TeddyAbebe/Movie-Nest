"use client";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function DarkModeSwitch() {
  const [isNightMode, setIsNightMode] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  //   const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  if (!isNightMode) {
    setTheme("dark");
  } else {
    setTheme("light");
  }

  return (
    <div
      className={`button-box w-10 h-10 rounded-md absolute top-3 right-60 flex items-center justify-center transform overflow-hidden `}
    >
      <div
        className={`sun group ${
          isNightMode ? "" : "hover:bg-[#F59E0B]"
        } relative w-6 h-6 rounded-full cursor-pointer border-2 ${
          isNightMode
            ? "border-white bg-[#374151]"
            : "border-[#374151] bg-white"
        }`}
        id={`${isNightMode ? "night" : "sun"}`}
        onClick={toggleNightMode}
      >
        <div className="line1 group-hover:bg-[#F59E0B]"></div>
        <div className="line2 group-hover:bg-[#F59E0B]"></div>
        <div className="line3 group-hover:bg-[#F59E0B]"></div>
        <div className="line4 group-hover:bg-[#F59E0B]"></div>
      </div>
    </div>
  );
}
