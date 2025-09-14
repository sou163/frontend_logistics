"use client";

import React, { useState } from "react";
import { ContactFormModal } from "@/components";
import styles from "./Faqs.module.css";
import { faqs, categories } from "@/data/faqs";

const FaqsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredFaqs = faqs.filter((faq) => faq.category === selectedCategory);

  const handleToggle = (index) => {
    // console.log(activeIndex, index);
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="container">
      <section className={styles.hero}>
        <h1>
          Know More <span>About Frontend Logistics</span>
        </h1>
        <p>
          Learn more about our services, coverage, and policies. Find quick
          answers to common questions or reach out to our support team for extra
          help.
        </p>
      </section>

      {/* Category cards */}
      <section className={styles.categoryGrid}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`${styles.categoryCard} ${
              selectedCategory === category.name ? styles.activeCard : ""
            }`}
            onClick={() => {
              setSelectedCategory(category.name);
              setActiveIndex(null);
            }}
          >
            <img className={styles.cardIcon} src={category.icon} />
            <h3>{category.name}</h3>
            <p>Explore FAQs about {category.name.toLowerCase()}.</p>
          </div>
        ))}
      </section>

      {/* FAQs Section */}
      {selectedCategory && (
        <section className={styles.faqContainer}>
          <div className={styles.faqGrid}>
            {/* Questions list */}
            <div className={styles.questionsList}>
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.questionItem} ${
                    activeIndex === index ? styles.activeQuestion : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {faq.qstn}
                </div>
              ))}
            </div>

            {/* Answer display */}
            <div className={styles.answerBox}>
              {activeIndex !== null ? (
                <div className={styles.faqAnswer}>
                  {filteredFaqs[activeIndex].answer}
                </div>
              ) : (
                <p className={styles.placeholder}>
                  Select a question to see the answer.
                </p>
              )}
            </div>
          </div>
        </section>
      )}
      <div className={styles.btnContainer}>
        <button
          type="button"
          className={styles.ctaBtn}
          onClick={() => setModalOpen(true)}
        >
          Reach Out to Us
        </button>

        <ContactFormModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default FaqsPage;
