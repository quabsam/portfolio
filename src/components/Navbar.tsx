import React from "react";
import { Link, NavLink } from "react-router/internal/react-server-client";

const links = [
  { to: "/projects", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="border-b border-line">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-accent font-display font-bold text-accent">
            JS
          </span>
          <span className="font-display text-lg font-semibold tracking-wide">
            JOSEPH SAM
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-3 transition-colors ${isActive ? "text-accent" : "text-muted hover:text-fg"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
