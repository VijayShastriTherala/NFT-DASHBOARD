import React from "react";
import {
  LayoutGrid,
  ClipboardList,
  Heart,
  Star,
  UserCircle,
  Settings,
  LogOut,
  Hexagon,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const navigation = [
  {
    path: "/",
    icon: LayoutGrid,
  },
  {
    path: "/bids",
    icon: ClipboardList,
  },
  {
    path: "/saved",
    icon: Heart,
  },
  {
    path: "/collections",
    icon: Star,
  },
  {
    path: "/profile",
    icon: UserCircle,
  },
  {
    path: "/settings",
    icon: Settings,
  },
];

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-16 flex-col
          items-center
          border-r border-white/5
          bg-dark-200
          transition-transform duration-300
          lg:translate-x-0
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <div className="flex h-16 w-full items-center justify-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Hexagon size={18} className="fill-white text-primary" />
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute right-2 top-3 text-gray-400 lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mt-4 flex flex-1 flex-col items-center gap-3">
          {navigation.map((item, index) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={`${item.path}-${index}`}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `
                  flex h-9 w-9 items-center justify-center
                  rounded-lg transition
                  ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-500 hover:bg-primary/10 hover:text-primary"
                  }
                  `
                }
              >
                <Icon size={16} />
              </NavLink>
            );
          })}
        </nav>

        <button className="mb-6 text-gray-500 transition hover:text-primary">
          <LogOut size={17} />
        </button>
      </aside>
    </>
  );
}