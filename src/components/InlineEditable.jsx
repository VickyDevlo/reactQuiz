import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";

const dataItems = [
  {
    id: 1,
    text: "Hello",
  },
  {
    id: 2,
    text: "Welcome",
  },
];

export const InlineEditable = () => {
  const [items, setItems] = useState(dataItems);

  const [currentEditedId, setCurrentEditedId] = useState(null);
  const [currentEditedVal, setCurrentEditedVal] = useState(null);

  const inputRef = useRef(null);

  const handleEdit = (item) => {
    const { id, text } = item;
    setCurrentEditedId(id);
    setCurrentEditedVal(text);
  };

  //save updated text
  const saveChanges = () => {
    if (currentEditedId !== null) {
      setItems(
        items.map((item) =>
          item.id === currentEditedId
            ? { ...item, text: currentEditedVal }
            : item
        )
      );
      setCurrentEditedId(null);
    }
  };

  const handleBlur = (e) => {
    if (currentEditedId !== null) {
      saveChanges();
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      saveChanges();
    } else if (e.key === "Escape") {
      setCurrentEditedId(null);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentEditedId]);

  return (
    <div className="flex flex-col items-center justify-center px-1 md:px-4 mt-12">
    
      <div className="mt-10 flex flex-col gap-2 w-full">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-muted-foreground rounded-lg w-full px-6 py-3"
          >
            {currentEditedId === item.id ? (
              <input
                ref={inputRef}
                key={item.id}
                value={currentEditedVal}
                onChange={(e) => {
                  setCurrentEditedVal(e.target.value);
                }}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                className="w-full mr-3 p-1 text-white"
              />
            ) : (
              <span className="md:text-2xl text-white">{item.text}</span>
            )}
            <Button
              onClick={() => handleEdit(item)}
              size={"icon"}
              variant={"outline"}
              className={"cursor-pointer"}
            >
              <Pencil />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
