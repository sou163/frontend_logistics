"use client";

import React, { useState, useEffect } from "react";
import styles from "./ScrollArrowBtn.module.css";

const ScrollArrowBtn = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const isNearBottom = () => {
    const scrollPosition = window.pageYOffset;
    const documentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;

    return scrollPosition + windowHeight >= documentHeight - 100;
  };

  // updating visual state of the button
  useEffect(() => {
    const handleScroll = () => {
      setIsAtBottom(isNearBottom() ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // actually scrolling to top or bottom
  const scrollToTopOrBottom = () => {
    if (isNearBottom()) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      className={styles.scrollBtn}
      id="scrollBtn"
      onClick={scrollToTopOrBottom}
      aria-label="Scroll to top or bottom"
    >
      {isAtBottom ? "↑" : "↓"}
    </button>
  );
};

export default ScrollArrowBtn;
