import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className="h-screen p-6 w-full">
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};
