"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Motion", href: "#motion" },
  { label: "Influencers", href: "#influencers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo}>
          PIRIS KATWE<span className={styles.inc}> Inc</span>
        </a>
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} className={styles.link}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className={styles.cta}>Get a Proposal</a>
        <button className={`${styles.burger} ${open ? styles.open : ""}`}
          onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`}>
        {links.map(l => (
          <a key={l.label} href={l.href} className={styles.mobileLink}
            onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#contact" className={`${styles.cta} ${styles.mobileCta}`}
          onClick={() => setOpen(false)}>Get a Proposal</a>
      </div>
    </nav>
  );
}
