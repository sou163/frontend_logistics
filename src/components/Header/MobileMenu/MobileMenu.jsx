"use client";

import React from "react";
import Link from "next/link";
import styles from "./MobileMenu.module.css";

const MobileMenu = ({ onClose }) => {
  return (
    <div className={`${styles.mobileMenu} ${styles.open}`} id="mobileMenu">
      {/* Close button */}
      <button
        className={styles.closeBtn}
        id="closeMenuBtn"
        aria-label="Close menu"
        onClick={onClose}
      >
        &times;
      </button>

      {/* Nav Links */}
      <div className={styles.menuLinks}>
        <Link href="/">Home</Link>

        {/* <Link href="/about">About Us</Link> */}
        {/* <Link href="#resources">Resources</Link> */}
        {/* Resources section */}
        {/* <div className={styles.mobileDropdown}>
          <Link href="/blogs">Blogs</Link>
          <Link href="/faqs">FAQs</Link>
        </div> */}

        <Link href="/blogs">Blogs</Link>
        <Link href="/services">Services</Link>
        <Link href="/careers">Careers</Link>
      </div>

      {/* CTA buttons */}
      <div className={styles.ctaContainer}>
        <Link href="/rider-signup" className={styles.ctaBtn}>
          Become a Rider
        </Link>
        <Link href="/deliver-with-us" className={styles.secondaryBtn}>
          Deliver With Us
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
