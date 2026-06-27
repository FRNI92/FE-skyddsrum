import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { company, navigation } from "../../data/site";
import { useScrollDirection } from "../../hooks/useScrollDirection";

export function Navigation() {
  const { isHidden, isScrolled } = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: isHidden ? -128 : 0, opacity: 1 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="topbar" aria-label="Kontaktinformation">
        <div className="container topbar__inner">
          <span>Vi har öppet vardagar 07-16</span>
          <div className="topbar__links">
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} aria-label={`Ring ${company.phone}`}>
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} aria-label={`Mejla ${company.email}`}>
              {company.email}
            </a>
          </div>
        </div>
      </div>
      <div className="container nav">
        <Link className="brand" to="/" aria-label="Skyddsrumsgruppen startsida">
          <span className="brand__mark" aria-hidden="true" />
          <span>Skyddsrumsgruppen</span>
        </Link>
        <button
          className="nav__toggle"
          type="button"
          aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
          aria-controls="main-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <nav
          id="main-navigation"
          className={`nav__links ${isMenuOpen ? "nav__links--open" : ""}`}
          aria-label="Huvudnavigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                `${isActive ? "active" : ""} ${item.href === "/kontakt" ? "nav__link--contact" : ""}`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link className="button button--compact" to="/kontakt" onClick={closeMenu}>
          Kontakta oss
        </Link>
      </div>
    </motion.header>
  );
}
