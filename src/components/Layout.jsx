import React, { useEffect, useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.classList.toggle("light", !darkMode);

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div
      className={`
        min-h-screen transition-colors duration-300
        ${
          darkMode
            ? "bg-dark-500 text-white"
            : "bg-gray-100 text-gray-900 light"
        }
      `}
    >
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="min-h-screen lg:pl-16">
        <main className="mx-auto min-h-screen max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <Header
            setSidebarOpen={setSidebarOpen}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <div className="pb-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}