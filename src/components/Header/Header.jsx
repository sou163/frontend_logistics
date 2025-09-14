"use client";

import React, { useState, useEffect } from "react";
import { Navbar, MobileMenu } from "@/components";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const [glow, setGlow] = useState(true);

  // logo glow effect
  useEffect(() => {
    if (pathname !== "/") {
      setGlow(false);
      return;
    }

    const handleScroll = () => {
      setGlow(window.scrollY < 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // screen size checker
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobileView(width < 768);
      setIsTabletView(width >= 768 && width < 1024);
    };

    // initial check
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerOverlay} />
      <Navbar
        isMobileView={isMobileView}
        isTabletView={isTabletView}
        onHamburgerClick={() => setIsMobileMenuOpen(true)}
        glow={glow}
      />
      {isMobileMenuOpen && (
        <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
      )}
    </header>
  );
};

export default Header;
