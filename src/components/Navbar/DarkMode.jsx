import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // html element

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      {theme == "light" ? (
        <MdDarkMode
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={`cursor-pointer text-2xl bg-slate-300 rounded-full h-8 w-8 p-1 ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
        />
      ) : (
        <MdLightMode
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className=" cursor-pointer text-2xl bg-gray-800 rounded-full h-8 w-8 p-1 "
        />
      )}
    </div>
  );
};

export default DarkMode;
