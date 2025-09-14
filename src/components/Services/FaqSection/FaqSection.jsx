"use client";

import React, { useState } from "react";
import styles from "./FaqSection.module.css";
import { serviceFaqs } from "@/data/faqs";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.faqs}>
      <div className="container">
        <h2>
          Frequently Asked <span>Questions</span>
        </h2>

        <div className={styles.faqWrapper}>
          {/* Left - Questions */}
          <div className={styles.faqQuestions}>
            {serviceFaqs.map((faq, index) => (
              <button
                key={index}
                className={`${styles.question} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {faq.question}
              </button>
            ))}
          </div>

          {/* Right - Answer */}
          <div className={styles.faqAnswer}>
            <p>{serviceFaqs[activeIndex].answer}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
