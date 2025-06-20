import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef(null);

  const handleClickOutside = useCallback((e) => {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <h1 className="text-2xl text-center font-medium tracking-wide text-gray-800">
        2 - Close on Outside Click
      </h1>
      <div className="relative mt-4 w-full" ref={dropDownRef}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant={"outline"}
          className={
            "cursor-pointer px-4 py-5 text-2xl w-full flex justify-between"
          }
        >
          Select an option
          <ChevronDown
            className={`ml-4 transition-all duration-200 ${
              isOpen ? "rotate-180 " : ""
            }`}
          />
        </Button>
        {isOpen && (
          <div className="absolute mt-2 w-full rounded-md border bg-background z-20 shadow-lg">
            <div className="p-1">
              {["option 1", "option 2", "option 3"].map((option, i) => (
                <button
                  onClick={() => setIsOpen(false)}
                  key={i}
                  className="block w-full px-4 py-2 text-left text-sm cursor-pointer bg-muted
                  hover:bg-border"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
