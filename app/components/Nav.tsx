"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [["Work", "#work"], ["Expertise", "#expertise"], ["About", "#about"], ["Contact", "#contact"]];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <a href="#top" className="logo" aria-label="NA. — back to top">NA<span>.</span></a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
        {links.map(([name, href]) => (
          <a key={name} href={href} onClick={() => setMenuOpen(false)}>{name}</a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact">Start a project <ArrowUpRight size={15} /></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
