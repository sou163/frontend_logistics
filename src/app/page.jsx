"use client";

import {
  HeroSection,
  AboutUsSection,
  PartnersSection,
  IndustriesSection,
  FeaturesSection,
  StatsSection,
  AchievementsSection,
  HomeTestimonials,
  MapSection,
  ContactFormModal,
  // ContactUsSection,
  // ScrollArrowBtn,
  // GeoMapLocation,
} from "@/components";
import { useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <HeroSection onOpenModal={() => setModalOpen(true)} />
      <AboutUsSection onOpenModal={() => setModalOpen(true)} />

      <PartnersSection onOpenModal={() => setModalOpen(true)} />
      <IndustriesSection onOpenModal={() => setModalOpen(true)} />

      <StatsSection onOpenModal={() => setModalOpen(true)} />
      <FeaturesSection onOpenModal={() => setModalOpen(true)} />

      <AchievementsSection onOpenModal={() => setModalOpen(true)} />
      <HomeTestimonials onOpenModal={() => setModalOpen(true)} />
      <MapSection onOpenModal={() => setModalOpen(true)} />

      {/* <ContactUsSection /> */}
      {/* <GeoMapLocation /> */}
      {/* <ScrollArrowBtn /> */}

      <ContactFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
