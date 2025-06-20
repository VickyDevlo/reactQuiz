import { ChevronRight, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { sidebarData } from "@/config";
import { Button } from "./ui/button";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`${
        isOpen ? "w-36 md:w-64" : "w-[60px]"
      } h-screen bg-foreground relative transition-all duration-500 ease-in-out`}
    >
      <>
        <div className="px-5 py-2 flex items-center justify-between space-x-4">
          <LayoutDashboard
            onClick={handleToggle}
            color="white"
            className="cursor-pointer shrink-0 focus:outline-none"
            aria-label="Toggle sidebar"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleToggle()}
          />
          <div
            className={`md:text-xl text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
              isOpen
                ? "opacity-100 visible max-w-full"
                : "opacity-0 invisible max-w-0"
            }`}
          >
            MY APP
          </div>
        </div>

        <nav className="mt-6">
          <ul className="flex flex-col gap-0.5">
            {sidebarData.map((data) => (
              <li key={data?.path} className="px-1">
                <NavLink
                  to={data.path}
                  className={({ isActive }) =>
                    `flex items-center cursor-pointer px-4 gap-2 py-1.5 text-white transition-colors duration-200 rounded ${
                      isActive ? "bg-blue-800" : "hover:bg-blue-900"
                    }`
                  }
                >
                  <data.icon className="shrink-0" />
                  <span
                    title={!isOpen ? data.name : ""}
                    className={`font-medium text-sm md:text-md transition-all duration-300 ease-in-out whitespace-nowrap ${
                      isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    {data.name}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </>

      <Button
        size={"icon"}
        onClick={handleToggle}
        className="cursor-pointer absolute bottom-5 -right-4 bg-sidebar-primary hover:bg-sidebar-primary rounded-md shadow-md transition-all 
        duration-300"
        aria-label="Collapse sidebar"
      >
        <ChevronRight
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Button>
    </div>
  );
};

export default Sidebar;
