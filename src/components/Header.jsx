import React, { useState } from "react";
import { Bell, Menu, Search, X } from "lucide-react";
import { Link } from "react-router-dom";

import UserAvatar from "./UserAvatar";
import ThemeToggle from "./ThemeToggle";

export default function Header({
  setSidebarOpen,
  darkMode,
  setDarkMode,
}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Your bid on Liquid Wave was outbid by 0.06 ETH", time: "5m ago" },
    { id: 2, text: "John Abraham started following you", time: "1h ago" },
    { id: 3, text: "New NFT Collection 'Cute Cube' dropped!", time: "2h ago" },
  ]);

  return (
    <header className="relative flex h-16 items-center justify-between gap-4">
      
      <div className="flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-dark-100 text-gray-300 lg:hidden"
        >
          <Menu size={18} />
        </button>

        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search Here"
            className="h-10 w-44 rounded-lg border-none bg-dark-100 pl-10 pr-4 text-xs text-white outline-none placeholder:text-gray-500 focus:ring-1 focus:ring-primary sm:w-56"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:text-white transition"
          >
            <Bell size={15} />
            {notifications.length > 0 && (
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-10 z-50 w-72 rounded-xl bg-dark-100 p-4 shadow-xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                <h4 className="text-xs font-semibold text-white">Notifications</h4>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="space-y-2">
                {notifications.map((item) => (
                  <div key={item.id} className="rounded-lg bg-dark-300 p-2.5 text-[9px]">
                    <p className="text-gray-200">{item.text}</p>
                    <span className="mt-1 block text-[8px] text-gray-400">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <Link to="/profile" title="View Profile">
          <UserAvatar size="h-8 w-8" />
        </Link>
      </div>
    </header>
  );
}