"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = ({ isMobileView, isTabletView, onHamburgerClick, glow }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      setDropdownOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/logos/logo.png"
            alt="Frontend Logo"
            width={180}
            height={60}
            priority
            className={`${styles.logoImg} ${glow ? styles.logoGlow : ""}`}
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className={styles.rightNavGroup}>
        {!isMobileView && !isTabletView && (
          <nav className={styles.desktopNav}>
            <Link href="/">Home</Link>

            {/* Dropdown Menu
            <div
              className={`${styles.dropdown} ${
                dropdownOpen ? styles.active : ""
              }`}
              ref={dropdownRef}
            >
              <Link
                href="#resources"
                onClick={(e) => {
                  e.preventDefault();
                  setDropdownOpen((prev) => !prev);
                }}
              >
                Resources
              </Link>
              {dropdownOpen && (
                <div className={styles.dropdownContent}>
                  <Link href="/blogs">Blogs</Link>
                  <Link href="/faqs">FAQs</Link>
                </div>
              )}
            </div> */}

            <Link href="/blogs">Blogs</Link>
            <Link href="/services">Services</Link>
            <Link href="/careers">Careers</Link>
          </nav>
        )}

        {/* Show CTA buttons in desktop and tablet , hide in mobile */}
        {!isMobileView && (
          <>
            <Link href="/rider-signup" className={styles.ctaBtn}>
              Become a Rider
            </Link>
            <Link href="/deliver-with-us" className={styles.secondaryBtn}>
              Deliver With Us
            </Link>
          </>
        )}

        {/* Hamburger Icon visible in tablet and mobile view*/}
        {(isMobileView || isTabletView) && (
          <button
            className={styles.hamburger}
            id="hamburgerBtn"
            aria-label="Open menu"
            onClick={onHamburgerClick}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
