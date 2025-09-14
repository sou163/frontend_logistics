"use client";

import React, { useState } from "react";
import {
  BenefitsSection,
  PricingSection,
  ServicesSection,
  WorkingSection,
  FaqSection,
  ContactFormModal,
} from "@/components";
import styles from "./ServicesPage.module.css";

const ServicesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Your Operations, Simplified</h1>
          <p>
            We provide end-to-end solutions that make local delivery seamless
            and stress-free.
          </p>
        </div>
      </section>

      <ServicesSection onOpenModal={() => setModalOpen(true)} />
      <BenefitsSection />

      <PricingSection onOpenModal={() => setModalOpen(true)} />
      <WorkingSection onOpenModal={() => setModalOpen(true)} />

      <FaqSection />

      <ContactFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default ServicesPage;
